import { validate } from '../middlewares/validator.js';
import { User } from '../models/models.js'

const registerUser = async (req) => {
    try{
        const { name, email, password, password_confirmation} = req ;
        
        await validate({ email:email, password:password, password_confirmation:password_confirmation, name:name }, 'register');
        
        const user = new User({ name:name, email:email, password:password});

        return await user.save();
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
        
        const user = await User.findOne({email:email, password:password});
        if(!user)
            throw {errors:{conta:['Usuario não existe']}};

        return user;
    } catch (err){
        throw {errors:{contaL:['Usuario não existe']}} 
    }
};

export default {
    registerUser,
    loginUser,
};
