import {User} from '../models/models.js';

// Os nomes estão bem autoexplicativos para precisar comentar algum...

// throw {errors:xxxxx} são mais facil de manusear 
// pois sao do msm formato que o validator

const searchUserById = async (id) => {
    const user = await User.findById(id);
    return user;
}

const searchUser = async (userData) => {
    const user = await User.findOne(userData);
    if(!user)
        throw {errors:{conta:['Usuario não existe']}} 

    return user;
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const deleteUser = async (userData) => {
    const deletedUser = await User.findOneAndDelete(userData);
    if (!deletedUser)
        throw {errors:{conta:['Usuario não existe']}} 

    return deletedUser;
};

const updateUser = async (userId, newUser) => {
    const updatedUser = await User.findByIdAndUpdate(userId, newUser)
    if (!updatedUser) {
        throw {errors:{conta:['Usuario não existe']}} 
    }
    return updatedUser;
};

export default {
    searchUser,
    searchUserById,
    deleteUser,
    createUser,
    updateUser
};
