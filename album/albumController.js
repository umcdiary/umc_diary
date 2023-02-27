import {} from './albumService';
import {
    renamealbumname,
    retrievalbumname,
    retrievemoge,
    retrievbookmarks,
    deleteBookmark,
    createalbum,
    retrievalbums,
    retrievpaper,
    createBookmark,
    findUserByEmail,
} from './albumProvider';
import { createpwd, makeCalendar, addAlbumUser } from './albumService';
import baseResponse from '../config/baseResponseStatus';
import { errResponse, SUCCESSResponse } from '../config/response';
import fs from 'fs';
/*
API : [POST]새로운 앨범을 추가한다.
*/
export const postalbum = async (req, res) => {
    const { UserID } = req.body;
    const createalbumResult = await createalbum(UserID);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, createalbumResult));
};

/*
API : [GET]현재 생성된 특정 앨범의 속지를 하나 가지고 온다.
*/

export const getpaper = async (req, res) => {
    const { Albumid } = req.body;
    const getpaperResult = await retrievpaper(Albumid);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, getpaperResult));
};

/*
API : [GET]모든 앨범들을 가지고 온다.
*/
export const getalbums = async (req, res) => {
    const { UserID } = req.body;
    console.log(UserID);
    const getalbumsResult = await retrievalbums(UserID);
    console.log(getalbumsResult);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, getalbumsResult));
};

/*
API : [PATCH]비밀번호 4자리 설정
4자리 비밀번호를 입력받는다.
4자리가 아니라면 다시 입력하도록 한다.
만약 4자리라면 album의 id(int)를 주었을 때 해당 album의 
pwd로 설정한다.
그럴려면 album id를 받고 pwd도 받아야겠네
*/
export const postpwd = async (req, res) => {
    const { albumid, albumPassword } = req.body;
    if (!albumid) {
        return errResponse(baseResponse.SIGNIN_EMAIL_EMPTY);
    }
    if (!albumPassword) {
        return res.send(errResponse(baseResponse.SIGNUP_PASSWORD_EMPTY));
    }

    if (albumPassword < 1000 || albumPassword > 9999) {
        return res.send(errResponse(baseResponse.SIGNUP_PASSWORD_LENGTH));
    }
    console.log(albumPassword);
    const postpwdResult = await createpwd(albumid, albumPassword);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, postpwdResult));
};

/*
API : [PATCH]
속지 즐겨 찾기 설정
*/

export const patchBookmark = async (req, res) => {
    const { paperID } = req.body;
    const patchBookmarkResult = await createBookmark(paperID);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS));
};

/*
API : [PATCH]
속지 즐겨 찾기 해제
*/

export const patchBookmark2 = async (req, res) => {
    const { paperID } = req.body;
    const patchBookmark2Result = await deleteBookmark(paperID);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS));
};
/*
API : [GET]
즐겨찾는 속지 모아보기
*/

export const getBookmarks = async (req, res) => {
    const { Albumid } = req.body;
    const getBookmarksResult = await retrievbookmarks(Albumid);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, getBookmarksResult));
};

/*
API : [GET] 특정 이모티콘을 가지고 온다.


export const getemoge = async(req,res)=>{
    //const {emogeID} = req.query;
    //const getemogResult = await retrievemoge(1);
    //console.log(getemogResult);
    /*const body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <img src = "../emoge/smile.png">
    </body>
    </html>`
    
    //res.write(200,{'content-Type': 'text/html'});
    //res.write(JSON.stringify(body));
    res.end();
    
    fs.readFile("./cat.jpg",(err,data)=>{
        console.log("file loading");
        res.writeHead(200);
        if(err){res.send()}
        res.send(data);
        res.end();


    })



    
    
    
    //return res.send(SUCCESSResponse(baseResponse.SUCCESS,getemogResult))
}*/

//API[get] 앨범 이름 가지고 오기
export const getname = async (req, res) => {
    const { AlbumId } = req.body;
    const getnameResult = await retrievalbumname(AlbumId);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, getnameResult));
};

//API : [POST] 앨범 이름 수정 하기
export const postname = async (req, res) => {
    const { albumname, AlbumId } = req.body;
    const postnameResult = await renamealbumname(albumname, AlbumId);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, postnameResult));
};

/*
API : [GET] 캘린더 가져오기
*/
export const getcalender = async (req, res) => {
    const date = new Date();
    const { userId, email } = req.verifiedToken;

    console.log(userId, email);
    // const getcalender = await makeCalendar(date);
    // return res.send(getcalender)
};

// [POST] 앨범 사용자 추가하기
export const postAlbumUser = async (req, res) => {
    let albumId = req.params.albumId;
    let userList = req.body.user;
    const addAlbumUserResult = await addAlbumUser(albumId, userList);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, addAlbumUserResult));
};

// [GET] 특정 이메일 사용자 찾기
export const getUserByEmail = async (req, res) => {
    let email = req.params.email;
    // if (email == '') {
    //     return res.send(
    //         SUCCESSResponse(
    //             baseResponse.SUCCESS,
    //             errResponse(baseResponse.USER_USEREMAIL_EMPTY)
    //         )
    //     );
    // }
    const findUserByEmailResult = await findUserByEmail(email);
    return res.send(
        SUCCESSResponse(baseResponse.SUCCESS, findUserByEmailResult)
    );
};
