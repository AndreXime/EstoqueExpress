import Estoque from "../services/userProduct.js";
import Data from "../services/userData.js";

import { Request, Response } from "express";


const home = async (req: Request, res: Response) => {
  res.render("publico/home");
};
const sobrenos = async (req: Request, res: Response) => {
  res.render("publico/sobre");
};
const publicEstoque = async (req: Request, res: Response) => {
  const estoques = await Estoque.getAllEstoques();
  res.render("publico/publicEstoques", { estoques });
};
const publicProdutos = async (req: Request, res: Response) => {
  const estoques = (await Estoque.searchOneEstoque(String(req.query.id))) || null;
  const produtos = estoques.produtosEstoque;
  res.render("publico/publicProdutos", { produtos });
};
const acess = async (req: Request, res: Response) => {
  if (req.session.usuario) {
    res.redirect("/empresa/menu");
  } else {
    const resultado = {
      contaR: req.session.error?.contaR,
      contaL: req.session.error?.contaL,
      email: req.session.error?.email,
      password: req.session.error?.password,
    };
    res.render("publico/login", { resultado });
  }
};
const update = async (req: Request, res: Response) => {
  const user = req.session.usuario;
  if (!user) {
    res.redirect("/empresa/entrar");
  } else {
    const estoques = (await Estoque.searchUserEstoques(user._id)) || null;
    const refreshUser = await Data.searchUserById(user._id);
    res.render("privado/update", { refreshUser, estoques });
  }
};
const menu = async (req: Request, res: Response) => {
  const user = req.session.usuario;
  if (!user) {
    res.redirect("/empresa/entrar");
  } else {
    const estoques = (await Estoque.searchUserEstoques(user._id)) || null;
    res.render("privado/menu", { estoques });
  }
};
const dash = async (req: Request, res: Response) => {
  const id = req.query.id;
  const estoques = (await Estoque.searchOneEstoque(String(id))) || null;
  if (req.session.usuario?._id != estoques.userOwner) {
    res.redirect("/empresa/entrar");
  } else {
    const produtos = estoques.produtosEstoque;

    res.render("privado/dashboard", { id, produtos });
  }
};
export default {
    home,
    acess,
    dash,
    menu,
    sobrenos,
    update,
    publicEstoque,
    publicProdutos
};