import pool from '../config/database';
import { selectUser } from './userDao';

export const findUser = async (userId) => {
    const selctUserParams = [userId];
    const connection = await pool.getConnection(async (conn) => conn);
    const selectUserResult = await selectUser(connection, selctUserParams);
    console.log(selectUserResult);
    const result = {};
    result.nickname = selectUserResult[0][0].nickname;
    result.email = selectUserResult[0][0].email;

    return result;
};
