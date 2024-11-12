import Estoque from "../services/userProduct.js";

import { Request, Response } from "express";

const addProduto = async (req: Request, res: Response) => {
  const user = req.session.usuario;
  if (!user) {
    res.status(403).send("Forbidden");
  } else {
    try {
      const produtoNovo = await Estoque.createProduto(
        String(req.query.id),
        req.body
      );
      res.status(201).json(produtoNovo);
    } catch (err) {
      res.status(400).send("Failed");
    }
  }
};
const addEstoque = async (req: Request, res: Response) => {
  const user = req.session.usuario;
  if (!user) {
    res.status(401).send("Unauthorized");
  } else {
    try {
      const estoquenovo = await Estoque.createEstoque(
        user._id,
        user.name,
        req.body.titulo,
        req.body.descricao
      );
      res.status(201).json(estoquenovo);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  }
};

const removeEstoque = async (req: Request, res: Response) => {
  const user = req.session.usuario;
  if (!user) {
    res.status(401).send("Unauthorized");
  } else {
    try {
      await Estoque.removeEstoque(String(req.query.id));
      res.status(202);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  }
};
const removeProduto = async (req: Request, res: Response) => {
  const user = req.session.usuario;
  if (!user) {
    res.status(401).send("Unauthorized");
  } else {
    try {
      const id = String(req.query.id);
      const idproduto = String(req.query.idproduto);
      await Estoque.removeProduto(id, idproduto);
      res.status(202);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  }
};

export default{
    addProduto,
    addEstoque,
    removeEstoque,
    removeProduto
}