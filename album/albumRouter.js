import express from "express"
import { jwtMiddleware } from "../config/jwtMiddleware";
import {getcalender,postname,getname,getBookmarks,patchBookmark2,getpaper,postalbum,getalbums,postpwd,patchBookmark} from "./albumController"

const albumRouter = express.Router();

albumRouter.get('/paper',getpaper);
albumRouter.post('/',postalbum);
albumRouter.get('/albums',getalbums);
albumRouter.post('/password',postpwd);
albumRouter.patch('/paper/bookmark',patchBookmark);
albumRouter.patch('/paper/nobookmark',patchBookmark2);
albumRouter.get('/paper/bookmarks',getBookmarks);
//albumRouter.get('/emoges/emoge',getemoge);
albumRouter.get('/name',getname);
albumRouter.post('/name/rename',postname);
albumRouter.get('/calender',jwtMiddleware,getcalender);
export default albumRouter;