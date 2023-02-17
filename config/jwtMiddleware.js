import jwt from "jsonwebtoken";
import baseResponse from "./baseResponseStatus";
import { errResponse } from "./response";



export const jwtMiddleware = (req,res,next) =>{
    // read the token from header or url
    const token = req.headers['x-access-token']
    // token does not exist
    console.log(token);
    if(!token) {
        return res.send(errResponse(baseResponse.TOKEN_EMPTY))
    }

    // create a promise that decodes the token
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, process.env.TOKEN_SECRET , (err, verifiedToken) => {
                if(err) reject(err);
                resolve(verifiedToken)
            })
        }
    );

    // if it has failed to verify, it will return an error message
    const onError = (error) => {
        return res.send(errResponse(baseResponse.TOKEN_VERIFICATION_FAILURE))
    };
    // process the promise
    p.then((verifiedToken)=>{
        //비밀 번호 바뀌었을 때 검증 부분 추가 할 곳
        req.verifiedToken = verifiedToken;
        console.log(verifiedToken);
        next();
    }).catch(onError);
}

