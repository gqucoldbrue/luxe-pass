// utils/validation.js
export const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    const errors = [];
    if (password.length < minLength) errors.push('Password must be at least 8 characters');
    if (!hasUpperCase) errors.push('Include at least one uppercase letter');
    if (!hasLowerCase) errors.push('Include at least one lowercase letter');
    if (!hasNumbers) errors.push('Include at least one number');
    if (!hasSpecialChar) errors.push('Include at least one special character');
  
    return errors;
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? [] : ['Please enter a valid email address'];
  };
  
  export const validatePhone = (phone) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone) ? [] : ['Please enter a valid phone number'];
  };