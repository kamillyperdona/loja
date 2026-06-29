const mysql = require('mysql12');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'loja'

});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectando ao MySql!');
});

module.exports = connection;
