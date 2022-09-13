"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQL_QUERIES = exports.mySQLQuery = void 0;
// Reusable query funciton
function mySQLQuery(connection, query, message) {
    connection.query(query, (error, result) => {
        if (error)
            throw error;
        console.log({
            result,
            message
        });
    });
}
exports.mySQLQuery = mySQLQuery;
// Query strings
exports.MYSQL_QUERIES = {
    CREATE_TABLE_QUERY: 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email_address VARCHAR(255), password VARCHAR(255))',
    INSERT_USER_QUERY: 'INSERT INTO users (name, email_address, password) VALUES ("Frederick", "frederick_forsyth@gmail.com", "i-like-thrillers-1938")',
    SELECT_USER_QUERY: 'SELECT * FROM users'
};
