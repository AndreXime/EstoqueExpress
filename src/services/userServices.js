const User = require('../models/userModel');

// Os nomes estão bem autoexplicativos para precisar comentar algum...

const getallUsers = async () => {
    return await User.find();
};

const getUserById = async (userData) => {
    return await User.findOne(userData);
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const deleteUser = async (userData) => {
    const deletedUser = await User.findOneAndDelete(userData);
    if (!deletedUser)
        throw new Error("Usuário não encontrado");

    return true;
};

const updateUser = async (currentUser, newUser) => {
    const updatedUser = await User.findOneAndUpdate(currentUser, newUser, { new: true ,runValidators: true });
    if (!updatedUser) {
        throw new Error("Usuário não encontrado");
    }
    return true;
};

const isEspecial = async ({name = "", username ="", email="", password=""}) => {
    const regex = /[^\w\s@.,à-ÿÀ-Ÿ]/g;

    if (regex.test(name) || regex.test(username) || regex.test(email) || regex.test(password)) {
        throw new TypeError("CaractereEspecial");
    }

    return true;
};

module.exports = {
    getallUsers,
    getUserById,
    deleteUser,
    createUser,
    updateUser,
    isEspecial
};
