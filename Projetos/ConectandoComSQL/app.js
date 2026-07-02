//Importa o framework express
const express = require('express');
const connection = require('./db');
const server = express();

//Middleware que permite o servidor entender requisições com JSON no corpo (req.body)
server.use(express.json());

//===================================
//Método HTTP: GET
//LISTAR TODOS OS CURSOS
//localhost:3000/cursos
server.get('/cursos', (req, res) => {

    const sql = 'SELECT * FROM cursos';

    connection.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado);
    });
});

//Método HTTP: GET
//LISTAR UM UNICO CURSO
//localhost:3000/curso/2
server.get('/cursos/:id', (req, res) => {

    const id = req.params.id;

    const sql = 'SELECT * FROM cursos WHERE id = ?';

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado[0]);
    });
});

//Método HTTP: POST
//CRIAR UM NOVO CURSO
//localhost:3000/cursos
//{ "name": "Curso de Python" }
server.post('/cursos', (req, res) => {

    const nome = req.body.nome;

    const sql = `INSERT INTO cursos (nome) VALUES (?)`;

    connection.query(sql, [nome], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Curso cadastrado com sucesso', id: resultado.insertId, nome: nome });
    });

});

//Método HTTP: PUT
//ATUALIZAR UM CURSO
//localhost:3000/cursos/0
server.put('/cursos/:id', (req, res) => {

    // Obtém o índice do curso a ser atualizado pela URL
    const id = req.params.id;
    const nome = req.body.nome;

    const sql = `UPDATE cursos SET nome = ? WHERE id = ?`;

    connection.query(sql, [nome, id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Curso atualizado com sucesso', nome: nome, id: id });
    });

});

//Método HTTP: DELETE
//DELETAR UM CURSO
//localhost:3000/cursos/1
server.delete('/cursos/:id', (req, res) => {

    // Obtém o índice do curso a ser removido
    const id = req.params.id;

    const sql = `DELETE FROM cursos WHERE id = ?`;

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Curso deletado com sucesso', id: id });
    });

});



//O metodo listen() faz o servidor começar a escutar
// requisiçoes em uma determinada porta.
server.listen(3023, () => {
    console.log("Servidor rodando na porta 3002");
});