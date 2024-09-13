const uService = require('../services/userServices');


const renderPage = async (req, res) => {
    const users = await uService.getallUsers();
    let user = {}
    if (req.query.id) {  // Se um ID for passado na query string (?id=...)
        user = await uService.getUserById(req.query.id);
    }
    res.render('index', { users });
};
const saveUser = async (req, res) => {
    try{
        const { name, email, password, username } = req.body;
        await uService.isEspecial({name, username, email, password});
        await uService.createUser({ name, username, email, password});
        res.status(200).json({ success: true , message: "Conta criada com sucesso!"});
    } catch (err) {
        if(err instanceof TypeError ){
            res.status(400).json({ success: false , message: "Não é possivel escrever com caracteres especiais." });
        }else{
            res.status(400).json({ success: false , message: "Já existe alguém com esse username e/ou email."});
        }
    }
};
const deleteUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        await uService.isEspecial({ email: email , password: password} );
        await uService.deleteUser({ email, password});
        res.status(200).json({ success: true , message: "Conta deletada com sucesso!"});
    } catch (err) {
        if(err instanceof TypeError ){
            res.status(400).json({ success: false , message: "Não é possivel escrever com caracteres especiais." });
        }else{
            res.status(400).json({ success: false , message: "Não existe uma conta com essas crendenciais"});
        }
    }
};
const updateUser = async (req, res) => {
    try{
        const { email, password, newname, newusername, newemail, newpassword } = req.body;
        await uService.isEspecial({ email: email, password: password} );
        await uService.isEspecial({ email: newemail, password: newpassword, name:newname, username: newusername} );
        await uService.updateUser({ email: email, password: password },{ name: newname, username: newusername, email: newemail, password: newpassword });
        res.status(200).json({ success: true , message: "Conta atualizada com sucesso!"});
    } catch (err) {
        if(err instanceof TypeError ){
            res.status(400).json({ success: false , message: "Não é possivel escrever com caracteres especiais." });
        }else{
            res.status(400).json({ success: false , message: "Essas crendeciais estão erradas."});
        }
    }
};


module.exports = {
    renderPage,
    saveUser,
    deleteUser,
    updateUser
};
