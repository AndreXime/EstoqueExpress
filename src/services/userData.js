import {User, Estoque} from '../models/models.js';
import { validate } from '../middlewares/validator.js';

const searchUserById = async (id) => {
    const user = await User.findById(id);
    return user;
}

const deleteUser = async (req) => {
    try{
        const { email, password } = req;

        await validate({ email, password }, 'search');

        const deletedUser = await User.findOneAndDelete({email:email, password:password});
        if (!deletedUser)
            throw {errors:{conta:['Usuario não existe']}} 

        return deletedUser;
    } catch (err) {
        throw err;
    }
};

const updateUser = async (userId, newUser) => {
    const updatedUser = await User.findByIdAndUpdate(userId, newUser, { new:true })
    if (!updatedUser) {
        throw {errors:{conta:['Usuario não existe']}} 
    }
    await Estoque.updateMany(
        { userOwner: updatedUser._id },
        { userOwnerName: updatedUser.name }
    );
    return updatedUser;
};

export default {
    searchUserById,
    deleteUser,
    updateUser
};
