const uService = require('../services/userServices');
const { validate } = require('../middlewares/validator');

const renderCrud = async (req, res) => {    
    res.render('pageCrud');
};
const registerUser = async (req, res) => {
    try{
        const { name, email, password} = req.body;
        
        const validation = validate({ email, password, name }, 'register');
        if (validation.fails())
            res.status(400).json({ success: false , message: "Validation failed!"});
        

        await uService.createUser({ name, email, password});
        res.status(200).json({ success: true , message: "Conta criada com sucesso!"});
    } catch (err) {
        res.status(400).json({ success: false , message: "Já existe alguém com esse username e/ou email."});
    }
};
const loginUser = async (req, res) => {
    try{
        const { email, password } = req;

        const validation = validate({ email, password }, 'search');
        if (validation.fails())
            res.status(400).json({ success: false , message: "Validation failed!"});

        await uService.searchUser({ email, password});
        res.status(200).json({ success: true , message: "Conta encontrada" });
    } catch (err) {
        res.status(400).json({ success: false , message: "Já existe uma conta com essas crendenciais"});
    }
};
const deleteUser = async (req, res) => {
    try{
        const { email, password } = req.body;

        const validation = validate({ email, password }, 'search');
        if (validation.fails())
            res.status(400).json({ success: false , message: "Validation failed!"});


        await uService.deleteUser({ email, password});
        res.status(200).json({ success: true , message: "Conta deletada com sucesso!"});
    } catch (err) {
        res.status(400).json({ success: false , message: "Não existe uma conta com essas crendenciais"});
    }
};
const updateUser = async (req, res) => {
    try{
        const { email, password, newname, newemail, newpassword } = req.body;

        const validation = validate({ email, password }, 'search');
        const validation2 = validate({ newemail, newpassword, newname }, 'update');
        
        if (validation.fails() || validation2.fails())
            res.status(400).json({ success: false , message: "Validation failed!"});


        await uService.updateUser({ email: email, password: password },{ name: newname, email: newemail, password: newpassword });
        res.status(200).json({ success: true , message: "Conta atualizada com sucesso!"});
    } catch (err) {
        res.status(400).json({ success: false , message: "Essas crendeciais estão erradas."});
    }
};


module.exports = {
    renderCrud,
    registerUser,
    loginUser,
    deleteUser,
    updateUser
};
