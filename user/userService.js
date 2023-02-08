const { pool } = require('../config/database');

module.exports = {
    findUserByEmail: async function (email) {
        const connection = await pool.getConnection(async (conn) => conn);
        const query = `
        SELECT * 
        FROM User
        WHERE email = ?;
        `;
        const result = await connection.query(query, email);
        connection.release();
        console.log(result);
        return result[0][0];
    },
    updateNickname: async function (email, nickname) {
        const connection = await pool.getConnection(async (conn) => conn);
        const query = `
        UPDATE User
        SET nickname = ?
        WHERE email = ?;
        `;
        const result = await connection.query(query, [nickname, email]);
        console.log(result);
        return result;
    },
    updateEmail: async function (email, NewEmail) {
        const connection = await pool.getConnection(async (conn) => conn);
        const query = `
        UPDATE User
        SET email = ?
        WHERE email = ?;
        `;
        const result = await connection.query(query, [NewEmail, email]);
        console.log(result);
        return result;
    },
    updatePassword: async function (email, password) {
        const connection = await pool.getConnection(async (conn) => conn);
        const query = `
        UPDATE User
        SET password = ?
        WHERE email = ?;
        `;
        const result = await connection.query(query, [password, email]);
        console.log(result);
        return result;
    },
    updatePhone: async function (email, phone) {
        const connection = await pool.getConnection(async (conn) => conn);
        const query = `
        UPDATE User
        SET Pnumber = ?
        WHERE email = ?;
        `;
        const result = await connection.query(query, [phone, email]);
        console.log(result);
        return result;
    },
    deleteUser: async function (email) {
        const connection = await pool.getConnection(async (conn) => conn);
        const query = `
        DELETE
        FROM User
        WHERE email = ?;
        `;
        const result = await connection.query(query, email);
        console.log(result);
        return result;
    },
};