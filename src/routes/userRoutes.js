const express = require('express');
const router = express.Router();
const uController = require('../controllers/userController');

router.get('/', uController.renderPage);
router.post('/save', uController.saveUser);
router.post('/update', uController.updateUser);
router.post('/delete', uController.deleteUser);

module.exports = router;
