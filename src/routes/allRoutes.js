import { Router } from 'express';
const router = Router();
import render from '../controllers/Render_Controller.js';
import api from '../controllers/API_Controller.js';

router.get('/', render.getHome);
router.get('/entrar', render.getLoginRegister);
router.get('/menu',render.getMenu);
router.get('/dashboard',render.getDash);

router.post('/api/login', api.login);
router.post('/api/register',api.register);
router.post('/api/appendCard',api.appendProduct);


export default router;
