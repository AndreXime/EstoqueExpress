import Auth from "../services/userAuth.js";
import Data from "../services/userData.js";

import { Request, Response, NextFunction } from "express";

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.usuario) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const response = await Auth.loginUser(req.body.email, req.body.password);
    req.session.usuario = { name: response.name, _id: response._id };
    return res.redirect("/empresa/menu");
  } catch (err: any) {
    req.session.error = err.errors;
    return res.redirect("/empresa/entrar");
  }
};
const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, password_confirmation } = req.body;
    const response = await Auth.registerUser(name, email, password, password_confirmation);
    req.session.usuario = { name: response.name, _id: response._id };
    return res.redirect("/empresa/menu");
  } catch (err: any) {
    req.session.error = err.errors;
    return res.redirect("/empresa/entrar");
  }
};
const logout = async (req: Request, res: Response) => {
  req.session.destroy(() => {});
  res.redirect("/");
};
const update = async (req: Request, res: Response) => {
  const user = req.session.usuario!;
  try {
    await Data.updateUser(user._id, req.body);
    res.redirect("/empresa/atualizarConta");
  } catch (err) {
    res.status(400).send("Bad Request");
  }
};
export default {
  login,
  register,
  logout,
  update, 
}