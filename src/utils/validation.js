/**
 * Unified validation utilities for email, URLs, and data validation.
 * Centralizes all validation logic to prevent duplication and ensure consistency.
 * @module src/utils/validation
 */

/**
 * Regular expression pattern for email validation
 * @type {RegExp}
 * @private
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Regular expression pattern for URL validation
 * @type {RegExp}
 * @private
 */
const URL_REGEX = /^(https?:\/\/)?([a-z0-9.-]+)\.([a-z]{2,6})(\/[^\\s]*)?$/;

/**
 * Validates an email address format
 * @param {string} email - The email address to validate
 * @returns {boolean} True if email format is valid, false otherwise
 * @example
 * isValidEmail('user@example.com'); // true
 * isValidEmail('invalid-email'); // false
 */
function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Validates a URL format
 * @param {string} url - The URL to validate
 * @returns {boolean} True if URL format is valid, false otherwise
 * @example
 * isValidUrl('https://example.com'); // true
 * isValidUrl('invalid-url'); // false
 */
function isValidUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }
  return URL_REGEX.test(url.trim());
}

/**
 * Validates that a required field is present and not empty
 * @param {any} value - The value to validate
 * @param {string} fieldName - The name of the field for error messages
 * @returns {object} Object with { valid: boolean, error: string|null }
 * @example
 * isRequired('John', 'name'); // { valid: true, error: null }
 * isRequired('', 'name'); // { valid: false, error: 'name is required' }
 */
function isRequired(value, fieldName) {
  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
    return {
      valid: false,
      error: `${fieldName} is required`,
    };
  }
  return { valid: true, error: null };
}

/**
 * Validates that a value is an array
 * @param {any} value - The value to validate
 * @param {string} fieldName - The name of the field for error messages
 * @returns {object} Object with { valid: boolean, error: string|null }
 * @example
 * isArray([], 'items'); // { valid: true, error: null }
 * isArray('not-array', 'items'); // { valid: false, error: 'items must be an array' }
 */
function isArray(value, fieldName) {
  if (!Array.isArray(value)) {
    return {
      valid: false,
      error: `${fieldName} must be an array`,
    };
  }
  return { valid: true, error: null };
}

/**
 * Validates that a value is a string
 * @param {any} value - The value to validate
 * @param {string} fieldName - The name of the field for error messages
 * @returns {object} Object with { valid: boolean, error: string|null }
 * @example
 * isString('hello', 'name'); // { valid: true, error: null }
 * isString(123, 'name'); // { valid: false, error: 'name must be a string' }
 */
function isString(value, fieldName) {
  if (typeof value !== 'string') {
    return {
      valid: false,
      error: `${fieldName} must be a string`,
    };
  }
  return { valid: true, error: null };
}

/**
 * Validates an object contains required fields
 * @param {object} obj - The object to validate
 * @param {string[]} requiredFields - Array of required field names
 * @returns {object} Object with { valid: boolean, errors: string[] }
 * @example
 * hasRequiredFields(
 *   { name: 'John', email: 'john@example.com' },
 *   ['name', 'email']
 * ); // { valid: true, errors: [] }
 */
function hasRequiredFields(obj, requiredFields) {
  const errors = [];

  if (!obj || typeof obj !== 'object') {
    return {
      valid: false,
      errors: ['Object is required and must be a valid object'],
    };
  }

  requiredFields.forEach((field) => {
    const validation = isRequired(obj[field], field);
    if (!validation.valid) {
      errors.push(validation.error);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates team member data structure
 * @param {object} member - The team member object to validate
 * @returns {object} Object with { valid: boolean, errors: string[] }
 * @example
 * validateTeamMember({
 *   name: 'John',
 *   role: 'Developer',
 *   bio: 'Developer',
 *   email: 'john@example.com'
 * }); // { valid: true, errors: [] }
 */
function validateTeamMember(member) {
  const errors = [];

  const fieldValidations = {
    name: isRequired(member.name, 'name'),
    role: isRequired(member.role, 'role'),
    bio: isRequired(member.bio, 'bio'),
    email: isRequired(member.email, 'email'),
  };

  Object.values(fieldValidations).forEach((validation) => {
    if (!validation.valid) {
      errors.push(validation.error);
    }
  });

  if (member.email && !isValidEmail(member.email) && !isValidUrl(member.email)) {
    errors.push('email must be a valid email address or URL');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates site data object structure
 * @param {object} data - The site data object to validate
 * @returns {object} Object with { valid: boolean, errors: string[] }
 */
function validateSiteData(data) {
  const errors = [];

  // Validate site section
  if (data.site) {
    const siteErrors = hasRequiredFields(data.site, ['name', 'description', 'domain', 'email']);
    if (!siteErrors.valid) {
      errors.push(...siteErrors.errors);
    }

    if (data.site.email && !isValidEmail(data.site.email)) {
      errors.push('site.email must be a valid email address');
    }
  } else {
    errors.push('site section is required');
  }

  // Validate navigation
  if (data.navigation) {
    const navValidation = isArray(data.navigation, 'navigation');
    if (!navValidation.valid) {
      errors.push(navValidation.error);
    } else {
      data.navigation.forEach((item, index) => {
        const itemErrors = hasRequiredFields(item, ['name', 'url']);
        if (!itemErrors.valid) {
          errors.push(`navigation[${index}]: ${itemErrors.errors.join(', ')}`);
        }
      });
    }
  } else {
    errors.push('navigation is required');
  }

  // Validate social links
  if (data.social) {
    if (!data.social.linkedin) {
      errors.push('LinkedIn URL is required in social links');
    }
  } else {
    errors.push('social links section is required');
  }

  // Validate forms
  if (data.forms) {
    if (!data.forms.mailingList) {
      errors.push('Mailing list form URL is required');
    }
    if (!data.forms.courseApplication) {
      errors.push('Course application form URL is required');
    }
  } else {
    errors.push('forms section is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Logs validation errors to console with formatting
 * @param {string} section - The section name or context for the errors
 * @param {string[]} errors - Array of error messages
 * @param {string} level - Log level: 'warn', 'error', 'info' (default: 'warn')
 * @example
 * logValidationErrors('site data', ['email is invalid', 'name is required']);
 */
function logValidationErrors(section, errors, level = 'warn') {
  if (!Array.isArray(errors) || errors.length === 0) {
    return;
  }

  const logFn = console[level] || console.warn;
  logFn(`Validation errors for ${section}:`);
  errors.forEach((error) => {
    logFn(`  ✗ ${error}`);
  });
}

// Export all validation functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isValidEmail,
    isValidUrl,
    isRequired,
    isArray,
    isString,
    hasRequiredFields,
    validateTeamMember,
    validateSiteData,
    logValidationErrors,
  };
}
