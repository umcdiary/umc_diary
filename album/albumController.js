import {} from "./albumService"
import {retrievbookmarks,deleteBookmark,createalbum,retrievalbums,retrievpaper,createBookmark} from "./albumProvider"
import {createpwd} from "./albumService"
import baseResponse from "../config/baseResponseStatus";
import { errResponse, SUCCESSResponse } from "../config/response";
/*
API : [POST]새로운 앨범을 추가한다.
*/
export const postalbum = async(req,res)=>{

    const {UserID} = req.body;
    const createalbumResult = await createalbum(UserID);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,createalbumResult ));
}

/*
API : [GET]현재 생성된 특정 앨범의 속지를 하나 가지고 온다.
*/

export const getpaper = async (req,res) =>{
    const {Albumid} = req.body;
    const getpaperResult = await retrievpaper(Albumid);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, getpaperResult));
   
}

/*
API : [GET]모든 앨범들을 가지고 온다.
*/
export const getalbums = async (req,res) =>{
   
    const {UserID} = req.body;
    console.log(UserID);
    const getalbumsResult = await retrievalbums(UserID);
    console.log(getalbumsResult);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, getalbumsResult));
   
}

/*
API : [PATCH]비밀번호 4자리 설정
4자리 비밀번호를 입력받는다.
4자리가 아니라면 다시 입력하도록 한다.
만약 4자리라면 album의 id(int)를 주었을 때 해당 album의 
pwd로 설정한다.
그럴려면 album id를 받고 pwd도 받아야겠네
*/
export const postpwd = async(req,res)=>{

    const {albumid, albumPassword} = req.body; 
    if(!albumid){
        return errResponse(baseResponse.SIGNIN_EMAIL_EMPTY);
    }
    if(!albumPassword){
        return res.send(errResponse(baseResponse.SIGNUP_PASSWORD_EMPTY));
    }
    
    if(albumPassword<1000||albumPassword>9999){
        return res.send(errResponse(baseResponse.SIGNUP_PASSWORD_LENGTH));
    }
    console.log(albumPassword);
    const postpwdResult = await createpwd(albumid,albumPassword);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,postpwdResult));

}

/*
API : [PATCH]
속지 즐겨 찾기 설정
*/

export const patchBookmark=async(req,res)=>{

    const {paperID} = req.body;
    const patchBookmarkResult = await createBookmark(paperID);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS));

}

/*
API : [PATCH]
속지 즐겨 찾기 해제
*/

export const patchBookmark2=async(req,res)=>{

    const {paperID} = req.body;
    const patchBookmark2Result = await deleteBookmark(paperID);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS));

}
/*
API : [GET]
즐겨찾는 속지 모아보기
*/

export const getBookmarks = async(req,res)=>{

    const {Albumid} = req.body;
    const getBookmarksResult = await retrievbookmarks(Albumid);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,getBookmarksResult));


}