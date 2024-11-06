import { Router } from 'express';
const router = Router();
import render from '../controllers/renderController.js';
import apiUser from '../controllers/apiUserController.js';
import apiProduct from "../controllers/apiProductController.js";


router.get('/', render.home);
router.get('/estoques', render.publicEstoque);
router.get('/produtos', render.publicProdutos);
router.get('/sobrenos', render.sobrenos);

router.get("/empresa/menu", render.menu);
router.get("/empresa/dashboard", render.dash);
router.get("/empresa/entrar", render.acess);
router.get("/empresa/atualizarConta", render.update);

router.post('/api/user/login', apiUser.login);
router.post('/api/user/register', apiUser.register);
router.post('/api/user', apiUser.update);
router.get('/api/user', apiUser.logout);

router.post('/api/produto', apiProduct.addProduto);
router.delete('/api/produto',apiProduct.removeProduto);
router.post('/api/estoque', apiProduct.addEstoque);
router.delete('/api/estoque',apiProduct.removeEstoque);



export default router;
