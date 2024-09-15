const express = require('express');
const router = express.Router();
const uController = require('../controllers/userController');
const pController = require('../controllers/pageController');

router.get ('/'      ,uController.renderPage);
router.post('/save'  ,uController.saveUser);
router.post('/update',uController.updateUser);
router.post('/delete',uController.deleteUser);

router.get ('/inicio',pController.renderPage);

module.exports = router;
