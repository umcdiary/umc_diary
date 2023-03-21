import baseResponse from "../config/baseResponseStatus"
import { errResponse, SUCCESSResponse } from "../config/response"
import { AddUser,findUser } from "./loginProvider"
import jwt from "jsonwebtoken"

export const postLogin = async (req,res)=>{
    const {K_ID,profile} = req.body
    
    if (!profile)
        res.status(400).json(errResponse(baseResponse.SIGNUP_PROFILE_EMPTY))
    if (!K_ID)
    res.status(400).json(errResponse(baseResponse.SIGNUP_KID_EMPTY))    
    try{
        const check = await findUser(K_ID);
        if (check.length > 0){
            // 로그인 하러 ㄱ
            const token = await jwt.sign({userId : check[0].Id,profile: check[0].profileImage},process.env.TOKEN_SECRET,{expiresIn:'3days'})
            res.status(200).json(SUCCESSResponse(baseResponse.SUCCESS_LOGIN,{token}))
        }
        else{
            res.json(SUCCESSResponse(baseResponse.GOTO_JOIN, {K_ID,profile}))
        }
    }catch(e){
        console.log(e.message+1)
    }
}

export const postUserData = async(req,res)=>{
    const {nickname,K_ID,profile} = req.body
    
    if(!nickname)
    {
        res.status(400).json(errResponse(baseResponse.SIGNUP_NICKNAME_EMPTY))
    }
    if (!profile)
        res.status(400).json(errResponse(baseResponse.SIGNUP_PROFILE_EMPTY))
    if (!K_ID)
    res.status(400).json(errResponse(baseResponse.SIGNUP_KID_EMPTY))  
    else if(nickname.length>20)
    {
        res.status(400).json(errResponse(baseResponse.SIGNUP_NICKNAME_LENGTH))
    }
    try{

        const postUserDataresult = await AddUser(nickname,profile,K_ID);
        const check = await findUser(K_ID);
        const token = await jwt.sign({userId : check[0].Id,profile: check[0].profileImage},process.env.TOKEN_SECRET,{expiresIn:'3days'});
     
        res.json(SUCCESSResponse(baseResponse.SUCCESS_SINGUP,{token}));



    }catch(err){
        console.log(err);
    }

    
} 

export const getToken = async(req,res)=>{

    res.json(SUCCESSResponse(baseResponse.TOKEN_SUCCESS));

}