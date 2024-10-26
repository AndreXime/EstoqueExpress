import { Router } from 'express';
const router = Router();
import render from '../controllers/renderController.js';
import api from '../controllers/apiControllers.js';

router.get('/', render.home);
router.get('/entrar', render.acess);
router.get('/menu',render.menu);
router.get('/dashboard',render.dash);
router.get('/sobrenos',render.sobrenos);
router.get('/atualizarConta',render.update);

router.post('/api/login', api.login);
router.post('/api/register', api.register);
router.get('/api/logout', api.logout);
router.post('/api/update', api.update);

router.post('/api/addProduto', api.addProduto);
router.post('/api/addEstoque', api.addEstoque);
router.post('/api/removeEstoque',api.removeEstoque);
router.post('/api/removeProduto',api.removeProduto);



export default router;
