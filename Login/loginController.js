import baseResponse from "../config/baseResponseStatus"
import { errResponse, SUCCESSResponse } from "../config/response"
import { findUser } from "./loginProvider"
import jwt from "jsonwebtoken"


export const postLogin = async (req,res)=>{
    const {email,profile } = req.body
    
    if (!email)
        res.status(400).json(errResponse(baseResponse.SIGNUP_EMAIL_EMPTY))
    if (!profile)
        res.status(400).json(errResponse(baseResponse.SIGNUP_PROFILE_EMPTY))

    try{
        const check = await findUser(email);
        if (check.length > 0){
            // 로그인 하러 ㄱ
            const token = await jwt.sign({userId : check[0].Id, email},process.env.TOKEN_SECRET)
            res.status(200).json(SUCCESSResponse(baseResponse.SUCCESS_LOGIN,{token}))
        }
        else{
            res.json(SUCCESSResponse(baseResponse.GOTO_JOIN, {email}))
        }
    }catch(e){
        console.log(e.message)
    }
}

/*export const postUserData = async(req,res)=>{
    const {nickname, phonebum, email} = req.body
    if(!nickname)
    {}

    
} */