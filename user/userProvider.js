import pool from '../config/database';
import { errResponse, SUCCESSResponse } from '../config/response';
import baseResponse from '../config/baseResponseStatus';
import { selectUser } from './userDao';
import e from 'express';

export const findUser = async (userId) => {
    try {
        const selctUserParams = [userId];
        const connection = await pool.getConnection(async (conn) => conn);
        const selectUserResult = await selectUser(connection, selctUserParams);
        console.log(selectUserResult[0][0]);
        if (selectUserResult[0][0] != undefined) {
            const result = {};
            result.nickname = selectUserResult[0][0].nickname;
            result.email = selectUserResult[0][0].email;
            return result;
        } else {
            return errResponse(baseResponse.USER_USERID_NOT_EXIST);
        }
    } catch (err) {
        return errResponse(baseResponse.DB_ERROR);
    }
};
