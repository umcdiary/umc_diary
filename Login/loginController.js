import baseResponse from "../config/baseResponseStatus"
import { errResponse, SUCCESSResponse } from "../config/response"
import { AddUser,findUser } from "./loginProvider"
import {retrieveKid}from "./loginService"
import jwt from "jsonwebtoken"

export const postLogin = async (req,res)=>{
    try{
        const {K_ID,profile} = req.body
        if (!profile)
            return res.send(errResponse(baseResponse.SIGNUP_PROFILE_EMPTY))
        if (!K_ID)
            return res.status(400).json(errResponse(baseResponse.SIGNUP_KID_EMPTY))  
        const check = await findUser(K_ID);
        if (check.length > 0){
            // 로그인 하러 ㄱ
             const token = await jwt.sign({userId : check[0].Id,profile: check[0].profileImage},process.env.TOKEN_SECRET,{expiresIn:'3days'})
            return res.status(200).json(SUCCESSResponse(baseResponse.SUCCESS_LOGIN,{token}))
        }
        else{
            return res.json(SUCCESSResponse(baseResponse.GOTO_JOIN, {K_ID,profile}))
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
    //닉네임 중복 확인 필요
    //K_ID 중복 확인 필요 만약 데이터 베이스에 해당 K_ID가 이미 있으면 이미 회원가입된 유저 

    if (!K_ID)
    res.status(400).json(errResponse(baseResponse.SIGNUP_KID_EMPTY));  
    const retrieveKidResult = await retrieveKid(K_ID);
    console.log(retrieveKidResult[0]);
    if(retrieveKidResult[0]){
        console.log("heeloo");
        return res.status(400).json(errResponse(baseResponse.SIGNUP_ALREADY_KID))
    }
    if (!profile)
        res.status(400).json(errResponse(baseResponse.SIGNUP_PROFILE_EMPTY))
    
    else if(nickname.length>20)
    {
        res.status(400).json(errResponse(baseResponse.SIGNUP_NICKNAME_LENGTH))
    }
    try{

        const postUserDataresult = await AddUser(nickname,profile,K_ID);
        const check = await findUser(K_ID);
        console.log(check);
        const token = await jwt.sign({userId : check[0].Id,profile: check[0].profileImage},process.env.TOKEN_SECRET,{expiresIn:'3days'});
     
        res.json(SUCCESSResponse(baseResponse.SUCCESS_SINGUP,{token}));



    }catch(err){
        console.log(err);
    }

    
} 

export const getToken = async(req,res)=>{

    res.json(SUCCESSResponse(baseResponse.TOKEN_SUCCESS));

}