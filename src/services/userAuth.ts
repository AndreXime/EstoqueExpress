import { validate } from '../middlewares/validator.js';
import { User } from '../models/models.js';
import argon2 from "argon2";

const registerUser = async (name:string, email:string, password:string, password_confirmation:string) => {
  try {
    await validate(
      {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        name: name,
      },
      "register"
    );

    const hashedPassword = await argon2.hash(password, {
      //Parametros para desenvolvimento
      type: argon2.argon2id, // Tipo de algoritmo
      memoryCost: 2 ** 12, // Memória: 4096 KiB (4 MB)
      timeCost: 2, // Iterações: 2
      parallelism: 1, // Paralelismo: 1 thread - reduz uso de CPU
      hashLength: 32, // Comprimento do hash: 32 bytes
    });

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
      
    return await user.save();
  } catch (err:any) {
    if (err.errors) {
      throw err;
    }
    throw {
      errors: { contaR: ["Já existe uma conta com essas crendenciais"] },
    };
  }
};
const loginUser = async (email: string, password:string) => {
    try{

        await validate({ email, password }, 'search') 
        
        const user = await User.findOne({ email:email });
        if(!user)
            throw {errors:{conta:['Usuario não existe']}};

        const passwordVerify = await argon2.verify(user.password, password);

        if (!passwordVerify) {
            throw { errors: { conta: ["Senha incorreta"] } };
        }

        return user;
    } catch (err){
        throw {errors:{contaL:['Usuario não existe']}} 
    }
};

export default {
    registerUser,
    loginUser,
};
