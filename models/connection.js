const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'crud'
});

db.connect(err => {
    if(err) throw err;
    console.log("Conectado");
});

module.exports = db;