import { Router } from 'express';
const router = Router();
import render from '../controllers/renderController.js';
import apiUser from '../controllers/apiUserControllers.js';
import apiProduct from "../controllers/apiProductControllers.js";


router.get('/', render.home);
router.get('/entrar', render.acess);
router.get('/publico', render.publicEstoque);
router.get('/menu',render.menu);
router.get('/dashboard',render.dash);
router.get('/sobrenos',render.sobrenos);
router.get('/atualizarConta', render.update);

router.post('/api/login', apiUser.login);
router.post('/api/register', apiUser.register);
router.get('/api/logout', apiUser.logout);
router.post('/api/update', apiUser.update);

router.post('/api/addProduto', apiProduct.addProduto);
router.post('/api/addEstoque', apiProduct.addEstoque);
router.post('/api/removeEstoque',apiProduct.removeEstoque);
router.post('/api/removeProduto',apiProduct.removeProduto);



export default router;
