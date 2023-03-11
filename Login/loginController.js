import baseResponse from "../config/baseResponseStatus"
import { errResponse, SUCCESSResponse } from "../config/response"
import { AddUser,findUser } from "./loginProvider"
import jwt from "jsonwebtoken"


export const postLogin = async (req,res)=>{
    const {profile} = req.body
    
    if (!profile)
        res.status(400).json(errResponse(baseResponse.SIGNUP_PROFILE_EMPTY))

    try{
        const check = await findUser(profile);
        if (check.length > 0){
            // 로그인 하러 ㄱ
            const token = await jwt.sign({userId : check[0].Id,profile: check[0].profileImage},process.env.TOKEN_SECRET)
            res.status(200).json(SUCCESSResponse(baseResponse.SUCCESS_LOGIN,{token}))
        }
        else{
            res.json(SUCCESSResponse(baseResponse.GOTO_JOIN, {profile}))
        }
    }catch(e){
        console.log(e.message+1)
    }
}

export const postUserData = async(req,res)=>{
    const {nickname,profile} = req.body
    
    if(!nickname)
    {
        res.status(400).json(errResponse(baseResponse.SIGNUP_NICKNAME_EMPTY))
    }
    else if(nickname.length>20)
    {
        res.status(400).json(errResponse(baseResponse.SIGNUP_NICKNAME_LENGTH))
    }
    try{

        const postUserDataresult = await AddUser(nickname,profile);
        const check = await findUser(profile);
        const token = await jwt.sign({userId : check[0].Id,profile: check[0].profileImage},process.env.TOKEN_SECRET)
     
        res.json(SUCCESSResponse(baseResponse.SUCCESS_SINGUP,{token}));



    }catch(err){
        console.log(err);
    }

    
} 