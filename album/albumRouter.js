import express from "express"
import { jwtMiddleware } from "../config/jwtMiddleware";
import {getPaperIdByDay,getAlbumId,postDefaultAlbum,postPaper,getPaperText,postPaperText,getfeelings,postfeelings,getcalender,postname,getname,getBookmarks,patchBookmark2,getpaper,postalbum,getalbums,postpwd,patchBookmark} from "./albumController"

const albumRouter = express.Router();

albumRouter.get('/id',jwtMiddleware,getAlbumId);
albumRouter.post('/default',jwtMiddleware,postDefaultAlbum);
albumRouter.get('/paper',jwtMiddleware,getpaper);
albumRouter.route('/paper/text').all(jwtMiddleware).get(getPaperText).post(postPaperText);
//albumRouter.post('/',postalbum);
albumRouter.get('/paper/id',jwtMiddleware,getPaperIdByDay);
albumRouter.get('/',jwtMiddleware,getalbums);
albumRouter.post('/password',postpwd);
albumRouter.patch('/paper/bookmark',jwtMiddleware,patchBookmark);
albumRouter.patch('/paper/nobookmark',jwtMiddleware,patchBookmark2);
albumRouter.get('/paper/bookmarks',jwtMiddleware,getBookmarks);
//albumRouter.get('/emoges/emoge',getemoji);
albumRouter.get('/name',jwtMiddleware,getname);
albumRouter.post('/name',jwtMiddleware,postname);
albumRouter.get('/calender',jwtMiddleware,getcalender);
//albumRouter.get('/paper/emoji/feelings',jwtMiddleware,getfeelings);
//albumRouter.post('/paper/:id',jwtMiddleware,postfeelings);
albumRouter.post('/paper/:AlbumId',jwtMiddleware,postPaper);
export default albumRouter;
