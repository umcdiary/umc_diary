import express from "express"
import { getUserNicknameProvider } from "./user/userProvider";

const userRouter = express.Router();

userRouter.get('/', getUserNicknameProvider)

export default userRouter;