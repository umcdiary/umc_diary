import express from "express"
import {getToken,postLogin, postUserData } from "./loginController";
import { jwtMiddleware } from "../config/jwtMiddleware";

const loginRouter = express.Router();

loginRouter.get('/',jwtMiddleware,getToken);
loginRouter.post('/',postLogin)
loginRouter.post('/userData',postUserData)



export default loginRouter