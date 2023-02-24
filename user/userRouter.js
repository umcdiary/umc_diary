import express from 'express';
import { jwtMiddleware } from '../config/jwtMiddleware';
import { patchNickname, deleteUser, getUserInfo } from './userController';

const userRouter = express.Router();

userRouter.patch('/nickname/:userId', patchNickname);
userRouter.delete('/delete/:userId', deleteUser);
userRouter.get('/info/:userId', getUserInfo);

export default userRouter;
