import express from "express"
import { postLogin, postUserData } from "./loginController";

const loginRouter = express.Router();

loginRouter.post('/',postLogin)
loginRouter.post('/userData',postUserData)



export default loginRouter