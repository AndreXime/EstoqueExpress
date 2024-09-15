const pService = require('../services/pageServices');

const renderPage = async (req,res) => {
    const body = req.body;

    res.render('index');
}

module.exports = {
    renderPage,
};