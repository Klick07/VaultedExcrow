const pool = require("../config/db");

exports.checkDatabase = async () => {

    try {

        const result = await pool.query("SELECT 1");

        return result.rowCount === 1;

    } catch (err) {

        return false;
    }
};