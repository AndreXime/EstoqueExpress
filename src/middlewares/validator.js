const Validator = require('validatorjs');

const rules = {
    register: {
        email: 'required|email',
        password: 'required|min:6|confirmed',
        password_confirmation: 'required',
        name: 'required|string|max:255',
    },
    search: {
        email: 'required|email',
        password: 'required|min:6',
    },
};

const validate = async (data, type) => {
    const validator = new Validator(data, rules[type]);
    if (validator.fails()){
        throw {errors: validator.errors.all()}; // Lançando os erros
    }
    return true
};

module.exports = { validate };
