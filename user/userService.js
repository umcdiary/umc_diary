import baseResponse from '../config/baseResponseStatus';
import { errResponse, SUCCESSResponse } from '../config/response';
import { updateNickname } from './userDao';
import pool from '../config/database';

export const editNickname = async (userId, nickname) => {
    try {
        const updateNicknameParams = [nickname, userId];
        const connection = await pool.getConnection(async (conn) => conn);
        const editNicknameResult = await updateNickname(
            connection,
            updateNicknameParams
        );
        connection.release();
        return editNicknameResult;
    } catch (err) {
        console.log(err);
        return errResponse(baseResponse.DB_ERROR);
    }
};
