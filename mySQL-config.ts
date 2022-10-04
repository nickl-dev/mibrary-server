const mysql = require('mysql');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port : 3306,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
  }
});

const MYSQL_CONFIG = {
  host: 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
}

const connection = mysql.createConnection(MYSQL_CONFIG);

async function mySQLQuery(sql: string) {
  await connection.query(sql, (error: any, result: any) => {
    if (error) throw error;
    console.log(sql, result)
    return result;
  })
}

module.exports = {
  knex, 
  mySQLQuery 
}