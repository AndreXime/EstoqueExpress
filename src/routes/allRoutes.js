const express = require('express');
const router = express.Router();
const pController = require('../controllers/homeController');
const dController = require('../controllers/dashboardController')

router.get('/', pController.getHome);
router.get('/entrar', pController.getLoginRegister);

router.post('/login', pController.login);
router.post('/register',pController.register);

router.get('/dashboard',dController.getDash);
router.post('/api/appendCard',dController.appendCard);


module.exports = router;
