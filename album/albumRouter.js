import express from 'express';
import {
    getBookmarks,
    patchBookmark2,
    getpaper,
    postalbum,
    getalbums,
    postpwd,
    patchBookmark,
    addUser,
    setAlbumColor,
} from './albumController';

const albumRouter = express.Router();

albumRouter.get('/paper', getpaper);
albumRouter.post('/', postalbum);
albumRouter.get('/albums', getalbums);
albumRouter.post('/password', postpwd);
albumRouter.patch('/paper/bookmark', patchBookmark);
albumRouter.patch('/paper/nobookmark', patchBookmark2);
albumRouter.get('/paper/bookmarks', getBookmarks);
albumRouter.post('/adduser/:albumId', addUser);
albumRouter.post('/color/:albumId', setAlbumColor);
export default albumRouter;
