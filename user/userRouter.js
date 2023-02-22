import express from 'express';
import { jwtMiddleware } from '../config/jwtMiddleware';
import { patchNickname } from './userController';

const userRouter = express.Router();

userRouter.patch('/nickname/:userId', patchNickname);
export default userRouter;
