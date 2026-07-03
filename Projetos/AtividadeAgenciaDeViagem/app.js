const express = require('express');
const connection = require('./db');
const server = express();

server.use(express.json());

server.get('/destinos', (req, res) => {
    const sql = 'SELECT * FROM destinos';

    connection.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado);
    });
});

server.get('/destinos/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'SELECT * FROM destinos WHERE id = ?';

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado[0]);
    });
});

server.post('/destinos', (req, res) => {
    const nome_destino = req.body.nome_destino;
    const pais_destino = req.body.pais_destino;

    const sql = `INSERT INTO destinos (nome_destino, pais_destino) VALUES (?, ?)`;

    connection.query(sql, [nome_destino, pais_destino], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Destino cadastrado com sucesso', id: resultado.insertId, nome_destino: nome_destino, pais_destino: pais_destino });
    });
});

server.put('/destinos/:id', (req, res) => {
    const id = req.params.id;
    const nome_destino = req.body.nome_destino;
    const pais_destino = req.body.pais_destino;

    const sql = `UPDATE destinos SET nome_destino = ?, pais_destino = ? WHERE id = ?`;

    connection.query(sql, [nome_destino, pais_destino, id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Destino atualizado com sucesso', id: id, nome_destino: nome_destino, pais_destino: pais_destino });
    });
});

server.get('/destinos/pais/:pais', (req, res) => {
    const pais = req.params.pais;

    const sql = `SELECT * FROM destinos WHERE pais_destino = ?`;

    connection.query(sql, [pais], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado[0]);
    });
});

server.delete('/destinos/:id', (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM destinos WHERE id = ?`;

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Destino deletado com sucesso', id: id });
    });
});

server.listen(3009, () => {
    console.log("Servidor rodando na porta 3009");
});