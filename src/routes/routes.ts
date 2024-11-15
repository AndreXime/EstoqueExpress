import { Router } from 'express';
const router = Router();

import render from '../controllers/renderController.js';
import apiUser from '../controllers/apiUserController.js';
import apiProduct from "../controllers/apiProductController.js";

import { checkAuth } from "../controllers/apiUserController.js";
import { Types } from 'mongoose';

declare module "express-session" {
  interface SessionData {
    usuario: { name: String; _id: Types.ObjectId };
    error: {
      contaR?: String; contaL?: String;
      email?: String; password?: String;
    };
  }
}

router.get('/', render.home);
router.get('/estoques', render.publicEstoque);
router.get('/produtos', render.publicProdutos);
router.get('/sobrenos', render.sobrenos);

router.get("/empresa/entrar", render.acess);
router.get("/empresa/menu", render.menu);
router.get("/empresa/dashboard",  render.dash);
router.get("/empresa/atualizarConta", render.update);

router.post('/api/user/login', apiUser.login);
router.post('/api/user/register', apiUser.register);
router.get('/api/user', apiUser.logout);
router.post("/api/user", checkAuth, apiUser.update);

router.post("/api/produto", checkAuth, apiProduct.addProduto);
router.delete("/api/produto", checkAuth, apiProduct.removeProduto);
router.post("/api/estoque", checkAuth, apiProduct.addEstoque);
router.delete("/api/estoque", checkAuth, apiProduct.removeEstoque);

router.use((req, res, next) => {
  res.status(404).render("publico/404");
});


export default router;
