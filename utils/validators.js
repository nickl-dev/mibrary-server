"use strict";
const emailRegExp = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
const validateRegisterInput = (name, email_address, password, confirmPassword) => {
    const errors = {};
    if (name.trim() === '') {
        errors.name = 'Name must not be empty';
    }
    if (email_address.trim() === '') {
        errors.email_address = 'Email must not be empty';
    }
    if (!email_address.match(emailRegExp)) {
        errors.email_address = 'Email must be a valid email address';
    }
    if (password === '') {
        errors.password = 'Password must not be empty';
    }
    else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
    }
    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
};
const validateLoginInput = (email_address, password) => {
    const errors = {};
    if (email_address.trim() === '') {
        errors.email_address = 'Email address must not be empty';
    }
    if (!email_address.match(emailRegExp)) {
        errors.email_address = 'Email must be a valid email address';
    }
    if (password.trim() === '') {
        errors.password = 'Password must not be empty';
    }
    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
};
module.exports = {
    validateRegisterInput,
    validateLoginInput
};
