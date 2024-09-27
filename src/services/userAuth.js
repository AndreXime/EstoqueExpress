import uService from './userCrud.js';
import {validate} from '../middlewares/validator.js';

const registerUser = async (req) => {
    try{
        const { name, email, password, password_confirmation} = req ;
        
        await validate({ email:email, password:password, password_confirmation:password_confirmation, name:name }, 'register');
        
        return await uService.createUser({ name, email, password});
    } catch (err) {
        if(err.errors){
            throw err;
        }
        throw {errors:{contaR: ["Já existe uma conta com essas crendenciais"]}};
    }
};
const loginUser = async (req) => {
    try{
        const { email, password } = req;

        await validate({ email, password }, 'search') 
        
        return await uService.searchUser({ email, password});
    } catch (err){
        throw {errors:{contaL:['Usuario não existe']}} 
    }
};
const deleteUser = async (req) => {
    try{
        const { email, password } = req;

        await validate({ email, password }, 'search');
        
        return await uService.deleteUser({ email, password});
    } catch (err) {
        throw err;
    }
};
const updateUser = async (req) => {
    try{
        const { email, password, newname, newemail, newpassword, newpassword_confirmation } = req;

        await validate({ email, password }, 'search');
        await validate({ email: newemail, password: newpassword,password_confirmation:newpassword_confirmation, name: newname }, 'register');

        return await uService.updateUser({ email: email, password: password },{ name: newname, email: newemail, password: newpassword });
    } catch (err) {
        throw err;
    }
};


export default {
    registerUser,
    loginUser,
    deleteUser,
    updateUser
};
