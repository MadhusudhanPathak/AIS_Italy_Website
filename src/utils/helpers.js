/**
 * Client-side utility functions for the AI Safety Italia website.
 * These functions are designed to run in browser environments.
 * @module src/utils/helpers
 */

/* global document, window */

/**
 * Sanitizes user input to prevent XSS attacks.
 * Uses DOM API to create safe text content.
 * @param {string} str - String to sanitize
 * @returns {string} Sanitized string safe for HTML insertion
 * @throws {Error} If input is not a string
 * @example
 * sanitizeInput('<script>alert("xss")</script>');
 * // Returns: '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
 */
function sanitizeInput(str) {
  // Validate input
  if (typeof str !== 'string') {
    console.warn('sanitizeInput: expected string, received', typeof str);
    return '';
  }

  // Only run in browser environment
  if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // For server-side contexts or Node.js, return the string as-is
  // (real sanitization should happen server-side anyway)
  return str;
}

/**
 * Displays a notification message to the user.
 * Auto-removes after 5 seconds.
 * @param {string} message - Message to display
 * @param {string} type - Type of notification: 'info', 'success', 'warning', 'error'
 * @param {number} duration - Duration to show notification in milliseconds (default: 5000)
 * @example
 * showNotification('Operation completed!', 'success');
 * showNotification('An error occurred', 'error', 3000);
 */
function showNotification(message, type = 'info', duration = 5000) {
  // Validate inputs
  if (typeof message !== 'string' || message.trim() === '') {
    console.error('showNotification: message is required and must be a string');
    return;
  }

  const validTypes = ['info', 'success', 'warning', 'error'];
  if (!validTypes.includes(type)) {
    console.warn(`showNotification: invalid type "${type}", using "info"`);
    type = 'info';
  }

  // Only run in browser environment
  if (typeof document === 'undefined') {
    console.log(`Notification [${type}]: ${message}`);
    return;
  }

  try {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'status');
    notification.setAttribute('aria-live', 'polite');
    notification.textContent = message;

    // Add styling
    const styles = {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 20px',
      borderRadius: '4px',
      color: 'white',
      zIndex: '10000',
      maxWidth: '400px',
      wordWrap: 'break-word',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '14px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 0.3s ease-in',
    };

    Object.assign(notification.style, styles);

    // Set background color based on type
    const colors = {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    };

    notification.style.backgroundColor = colors[type] || colors.info;

    // Add to document
    document.body.appendChild(notification);

    // Auto-remove after specified duration
    const timeoutId = setTimeout(() => {
      try {
        if (notification.parentNode) {
          notification.style.animation = 'fadeOut 0.3s ease-out';
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 300);
        }
      } catch (error) {
        console.error('Error removing notification:', error);
      }
    }, duration);

    // Allow manual dismissal via click
    notification.addEventListener('click', () => {
      clearTimeout(timeoutId);
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    });
  } catch (error) {
    console.error('Error creating notification:', error);
  }
}

/**
 * Debounces a function to prevent excessive execution.
 * Useful for event handlers like resize, scroll, or input.
 * @param {Function} func - Function to debounce
 * @param {number} wait - Time to wait in milliseconds before executing
 * @param {boolean} immediate - Whether to trigger on leading edge (default: false)
 * @returns {Function} Debounced function
 * @throws {Error} If func is not a function
 * @example
 * const debouncedSearch = debounce(searchAPI, 300);
 * input.addEventListener('input', debouncedSearch);
 */
function debounce(func, wait, immediate = false) {
  if (typeof func !== 'function') {
    throw new Error('debounce: first argument must be a function');
  }

  if (typeof wait !== 'number' || wait < 0) {
    throw new Error('debounce: wait must be a non-negative number');
  }

  let timeout;

  return function executedFunction(...args) {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

/**
 * Throttles a function to execute at most once per interval.
 * Similar to debounce but executes function at regular intervals.
 * @param {Function} func - Function to throttle
 * @param {number} limit - Minimum time between executions in milliseconds
 * @returns {Function} Throttled function
 * @throws {Error} If func is not a function
 * @example
 * const throttledScroll = throttle(handleScroll, 100);
 * window.addEventListener('scroll', throttledScroll);
 */
function throttle(func, limit) {
  if (typeof func !== 'function') {
    throw new Error('throttle: first argument must be a function');
  }

  if (typeof limit !== 'number' || limit < 0) {
    throw new Error('throttle: limit must be a non-negative number');
  }

  let inThrottle;

  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Checks if an element is currently visible in the viewport.
 * @param {Element} element - DOM element to check
 * @returns {boolean} True if element is visible in viewport
 * @example
 * if (isElementInViewport(myElement)) {
 *   // Element is visible
 * }
 */
function isElementInViewport(element) {
  if (typeof document === 'undefined' || !element) {
    return false;
  }

  try {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } catch (error) {
    console.error('Error checking element visibility:', error);
    return false;
  }
}

// Export functions for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    sanitizeInput,
    showNotification,
    debounce,
    throttle,
    isElementInViewport,
  };
}
