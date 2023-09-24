const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost', 
    user: process.env.DB_USERNAME || 'root', 
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DBNAME || 'chat-app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

module.exports = pool.promise()