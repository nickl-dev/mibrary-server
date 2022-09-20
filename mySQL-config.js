"use strict";
const MY_SQL = require('mysql');
const MYSQL_CONFIG = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
};
const MY_SQL_CONNECTION = MY_SQL.createConnection(MYSQL_CONFIG);
const MY_SQL_QUERY = (query) => {
    return MY_SQL_CONNECTION.connect((error) => {
        if (error)
            throw error;
        MY_SQL_CONNECTION.query(query, (error, results, fields) => {
            if (error)
                throw error;
            console.log(results);
            return results;
        });
        MY_SQL_CONNECTION.end((error) => {
            if (error)
                throw error;
        });
    });
};
module.exports = {
    MY_SQL,
    MYSQL_CONFIG,
    MY_SQL_CONNECTION,
    MY_SQL_QUERY
};
