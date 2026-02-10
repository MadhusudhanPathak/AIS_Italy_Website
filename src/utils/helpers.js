// Utility functions for the AI Safety Italia website

/* global document */

/**
 * Validates an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid, false otherwise
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitizes user input to prevent XSS
 * @param {string} str - String to sanitize
 * @returns {string} - Sanitized string
 */
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';

  // Only run in browser environment
  if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // For server-side rendering or Node.js, return the string as-is
  return str;
}

/**
 * Shows a notification message
 * @param {string} message - Message to display
 * @param {string} type - Type of message ('info', 'success', 'warning', 'error')
 */
function showNotification(message, type = 'info') {
  // Only run in browser environment
  if (typeof document === 'undefined') {
    console.log(`Notification (${type}): ${message}`);
    return;
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styling
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '12px 20px',
    borderRadius: '4px',
    color: 'white',
    zIndex: '10000',
    maxWidth: '400px',
    wordWrap: 'break-word',
  });

  // Set background color based on type
  switch (type) {
    case 'success':
      notification.style.backgroundColor = '#10b981';
      break;
    case 'warning':
      notification.style.backgroundColor = '#f59e0b';
      break;
    case 'error':
      notification.style.backgroundColor = '#ef4444';
      break;
    default:
      notification.style.backgroundColor = '#3b82f6';
  }

  // Add to document
  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 5000);
}

/**
 * Debounces a function to limit execution frequency
 * @param {Function} func - Function to debounce
 * @param {number} wait - Time to wait in milliseconds
 * @param {boolean} immediate - Whether to trigger immediately
 * @returns {Function} - Debounced function
 */
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Export functions for module use (if supported)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validateEmail,
    sanitizeInput,
    showNotification,
    debounce,
  };
}
