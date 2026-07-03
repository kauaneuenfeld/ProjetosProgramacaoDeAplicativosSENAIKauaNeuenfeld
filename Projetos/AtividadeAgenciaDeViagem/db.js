const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'agencia_viagens',
});

connection.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar ', erro);
        return;
    } else {
        console.log('Conectado ao banco de dados');
    }
});

module.exports = connection;