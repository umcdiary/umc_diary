import {} from "./albumService"
import {findepaper,retrivePaperText,createPaperText,retrievemoji,createfeelings,createpaper,renamealbumname,retrievalbumname,retrievbookmarks,deleteBookmark,createalbum,retrievalbums,retrievpaper,createBookmark} from "./albumProvider"
import {retrievemojies,retrievepaperId,createpwd,} from "./albumService"
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
    const {paperID} = req.body;
    const getpaperResult = await retrievpaper(paperID);
    //추가적으로 저장된 keywords들도 가지고 와야한다.
    const getemojiResult = await retrievemoji(paperID);
    const result = new Array();
    result.push(getpaperResult);
    result.push(getemojiResult);
    console.log(result);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, result));
   
}

/*
API : [GET]모든 앨범들을 가지고 온다.
*/
export const getalbums = async (req,res) =>{
   
    const {userId} = req.verifiedToken;
    const getalbumsResult = await retrievalbums(userId);
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


//API[get] 앨범 이름 가지고 오기
export const getname=async(req,res)=>{

    const {AlbumId} = req.body;
    const getnameResult = await retrievalbumname(AlbumId);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,getnameResult))
}

//API : [POST] 앨범 이름 수정 하기 
export const postname = async(req,res)=>{

    const {albumname,AlbumId} = req.body;
    const postnameResult = await renamealbumname(albumname,AlbumId);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,null));
}

/*
API : [GET] 해당 달의 기분 이모티콘을 전부 가지고 온다. 
*/
export const getcalender = async(req,res)=>{
    const {AlbumId}=req.body;
    const date = new Date();
    const {
        verifiedToken:{
            userId
        }
    }=req;
    const getpaperIdResult = await retrievepaperId(date,userId,AlbumId);
    const getcalenderResult = await retrievemojies(getpaperIdResult);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,getcalenderResult));

}

/*
API : [POST] 속지 작성 1단계 
*/
export const postfeelings = async(req,res)=>{
    //속지도 만들고 keywords도 설정해야 한다. 
    const {
        verifiedToken:{
            userId,
        },
        body:{emojiID,paperID},
        params:{AlbumId}
    }=req;
    const findpaperResult = await findepaper(paperID);
    if(!findpaperResult){
        const postpaperResult = await createpaper(userId,AlbumId);
        const postfeelingsResult = await createfeelings(emojiID,paperID);
        if(postfeelingsResult)
            return res.send(SUCCESSResponse(baseResponse.SUCCESS,null))
    }
    else{
        const postfeelingsResult = await createfeelings(emojiID,paperID);
        if(postfeelingsResult)
            return res.send(SUCCESSResponse(baseResponse.SUCCESS,null))
    }
    
    

}

export const postPaperText = async(req,res)=>{
    try{
    const {paperID,paperText}=req.body;
    if(!paperText){
        return res.send(errResponse(baseResponse.PAPER_TEXT_EMPTY))
    }
    const postPaperTextResult = await createPaperText(paperID,paperText);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,null))
    }catch(err){
        console.log(err);

    }
}

export const getPaperText = async(req,res)=>{
try{
    const {paperID} = req.body;
    if(!paperID){
        return res.send(errResponse(baseResponse.PAPER_ID_WRONG));
    }
    //해당 paperID가 있는지 확인하는 것도 필요하려나? 일단 keep
    const getPapertextResult = await retrivePaperText(paperID);
    if(getPapertextResult)
        return res.send(SUCCESSResponse(baseResponse.SUCCESS,getPapertextResult))

}catch(err){
    console.log(err)
}

}