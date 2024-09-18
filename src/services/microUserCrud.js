const User = require('../models/userModel');

// Os nomes estão bem autoexplicativos para precisar comentar algum...

const searchUser = async (userData) => {
    const user = await User.findOne(userData);
    if(!user)
        throw new Error("Usuario não existe")

    return user;
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const deleteUser = async (userData) => {
    const deletedUser = await User.findOneAndDelete(userData);
    if (!deletedUser)
        throw new Error("Usuário não existe");

    return deletedUser;
};

const updateUser = async (currentUser, newUser) => {
    const updatedUser = await User.findOneAndUpdate(currentUser, newUser, { new: true ,runValidators: true });
    if (!updatedUser) {
        throw new Error("Usuário não existe");
    }
    return updatedUser;
};

module.exports = {
    searchUser,
    deleteUser,
    createUser,
    updateUser,
};
