// Reusable query funciton
export function mySQLQuery (connection: any, query: string, message: string) {
  connection.query(query, (error: any, result: any) => {
    if (error) throw error;

    console.log({
      result, 
      message
    })
  })
}

// Query strings
export const MYSQL_QUERIES: {
  CREATE_TABLE_QUERY: string,  
  INSERT_USER_QUERY: string,
  SELECT_USER_QUERY: string
} = {
  CREATE_TABLE_QUERY: 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email_address VARCHAR(255), password VARCHAR(255))',
  INSERT_USER_QUERY: 'INSERT INTO users (name, email_address, password) VALUES ("Frederick", "frederick_forsyth@gmail.com", "i-like-thrillers-1938")',
  SELECT_USER_QUERY: 'SELECT * FROM users'
}