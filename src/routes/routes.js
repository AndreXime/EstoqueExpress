import { Router } from 'express';
const router = Router();
import render from '../controllers/render_Controller.js';
import api from '../controllers/api_Controller.js';

router.get('/', render.getHome);
router.get('/entrar', render.getLoginRegister);
router.get('/menu',render.getMenu);
router.get('/dashboard',render.getDash);
router.get('/sobrenos',render.getSobrenos);
router.get('/atualizarConta',render.getUpdate)

router.post('/api/login', api.login);
router.post('/api/register',api.register);
router.post('/api/logout',api.logout);
router.post('/api/update',api.update)

router.post('/api/addProduto',api.addProduto);
router.post('/api/addEstoque',api.addEstoque);
router.post('/api/removeEstoque',api.removeEstoque);
router.post('/api/removeProduto',api.removeProduto);



export default router;
