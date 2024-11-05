import { Router } from 'express';
const router = Router();
import render from '../controllers/renderController.js';
import apiUser from '../controllers/apiUserController.js';
import apiProduct from "../controllers/apiProductController.js";


router.get('/', render.home);
router.get('/estoques', render.publicEstoque);
router.get("/produtos", render.publicProdutos);
router.get('/sobrenos', render.sobrenos);

router.get("/empresa/menu", render.menu);
router.get("/empresa/dashboard", render.dash);
router.get('/empresa/entrar', render.acess);
router.get("/empresa/atualizarConta", render.update);

router.post('/api/login', apiUser.login);
router.post('/api/register', apiUser.register);
router.get('/api/logout', apiUser.logout);
router.post('/api/update', apiUser.update);

router.post('/api/addProduto', apiProduct.addProduto);
router.post('/api/addEstoque', apiProduct.addEstoque);
router.post('/api/removeEstoque',apiProduct.removeEstoque);
router.post('/api/removeProduto',apiProduct.removeProduto);



export default router;
