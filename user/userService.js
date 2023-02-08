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
};
