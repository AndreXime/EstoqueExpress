const Validator = require('validatorjs');

const rules = {
    register: {
        email: 'required|email',
        password: 'required|min:6|confirmed',
        name: 'required|string|max:255',
    },
    search: {
        email: 'required|email',
        password: 'required|min:6',
    },
    update: {
        email: 'email',
        password: 'min:6|confirmed',
        name: 'string|max:255',
    },
};

const validate = (data, type) => {
    const validation = new Validator(data, rules[type]);
    return validation;
};

module.exports = { validate };
