const uService = require('../services/userServices');


const renderPage = async (req, res) => {
    const users = await uService.getUsers();
    let user = {}
    if (req.query.id) {  // Se um ID for passado na query string (?id=...)
        user = await uService.getUserById(req.query.id);
    }
    res.render('index', { users });
};
const saveUser = async (req, res) => {
    try{
        const { name, email, password, username } = req.body;
        await uService.isEspecial({name, username, email});
        await uService.createUser({ name, username, email, password});
        res.status(200).json({ success: true });
    } catch (err) {
        if(err instanceof TypeError ){
            res.status(400).json({ success: false , message: "Caracteres especiais" });
        }else{
            res.status(400).json({ success: false , message: "Já existe"});
        }
    }
};
const deleteUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        await uService.deleteUserUser({ email, password});
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};
const updateUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        await uService.updateUser({ email, password});
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};


module.exports = {
    renderPage,
    saveUser,
    deleteUser,
    updateUser
};
