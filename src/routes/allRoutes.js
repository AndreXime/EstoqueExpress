const express = require('express');
const router = express.Router();
const uController = require('../controllers/userController');
const pController = require('../controllers/pageController');

router.get('/', pController.getIndex);
router.get('/login', pController.getLogin);
router.post('/login', pController.postLogin);

router.get ('/api', uController.renderCrud);
router.post('/api/login', uController.loginUser);
router.post('/api/register', uController.registerUser);
router.post('/api/update', uController.updateUser);
router.post('/api/delete', uController.deleteUser);


module.exports = router;
