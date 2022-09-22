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

module.exports = { knex }