import express from 'express';
import { jwtMiddleware } from '../config/jwtMiddleware';
import { patchNickname, deleteUser } from './userController';

const userRouter = express.Router();

userRouter.patch('/nickname/:userId', patchNickname);
userRouter.delete('/delete/:userId', deleteUser);

export default userRouter;
