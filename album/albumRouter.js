import express from "express"
import { jwtMiddleware } from "../config/jwtMiddleware";
import {getAlbumId,postDefaultAlbum,postPaper,getPaperText,postPaperText,getfeelings,postfeelings,getcalender,postname,getname,getBookmarks,patchBookmark2,getpaper,postalbum,getalbums,postpwd,patchBookmark} from "./albumController"

const albumRouter = express.Router();

albumRouter.get('/ID',jwtMiddleware,getAlbumId);
albumRouter.post('/default',jwtMiddleware,postDefaultAlbum);
albumRouter.get('/paper',jwtMiddleware,getpaper);
albumRouter.route('/paper/text').all(jwtMiddleware).get(getPaperText).post(postPaperText);
//albumRouter.post('/',postalbum);
albumRouter.get('/',jwtMiddleware,getalbums);
albumRouter.post('/password',postpwd);
albumRouter.patch('/paper/bookmark',patchBookmark);
albumRouter.patch('/paper/nobookmark',patchBookmark2);
albumRouter.get('/paper/bookmarks',getBookmarks);
//albumRouter.get('/emoges/emoge',getemoji);
albumRouter.get('/name',getname);
albumRouter.post('/name',postname);
albumRouter.get('/calender',jwtMiddleware,getcalender);
//albumRouter.get('/paper/emoji/feelings',jwtMiddleware,getfeelings);
//albumRouter.post('/paper/:id',jwtMiddleware,postfeelings);
albumRouter.post('/paper/:AlbumId',jwtMiddleware,postPaper);
export default albumRouter;