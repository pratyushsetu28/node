const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'sql6.freemysqlhosting.net', // MYSQL HOST NAME
    user     : 'sql6403962',        // MYSQL USERNAME
    password : 'EskAKUI9MX',    // MYSQL PASSWORD
    database : 'sql6403962'      // MYSQL DB NAME
}).promise();
module.exports = dbConnection;