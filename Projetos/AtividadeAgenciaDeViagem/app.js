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

    const sqlReservas = `DELETE FROM reservas WHERE id_destino = ?`;

    connection.query(sqlReservas, [id], (erroReservas) => {
        if (erroReservas) {
            console.log(erroReservas);
            return res.status(500).json({ erro: erroReservas.message });
        }

        const sqlDestino = `DELETE FROM destinos WHERE id = ?`;
        connection.query(sqlDestino, [id], (erroDestino, resultado) => {
            if (erroDestino) {
                console.log(erroDestino);
                return res.status(500).json({ erro: erroDestino.message });
            }

            return res.json({ message: 'Destino deletado com sucesso', id: id });
        });
    });
});
// ------------------------------------------------------------------------------------------------------------------------
//Cliente

server.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM clientes';

    connection.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado);
    });
});

server.get('/clientes/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM clientes WHERE id = ?`;

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado[0]);
    });
});

server.post('/clientes', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    const sql = `INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)`;

    connection.query(sql, [nome, email, telefone], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Cliente cadastrado com sucesso', id: resultado.insertId, nome: nome, email: email, telefone: telefone });
    });
});

server.put('/clientes/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    const sql = `UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?`;

    connection.query(sql, [nome, email, telefone, id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Cliente atualizado com sucesso', id: id, nome: nome, email: email, telefone: telefone });
    });
});

server.delete('/clientes/:id', (req, res) => {
    const id = req.params.id;

    // Primeiro deleta as reservas associadas a esse cliente
    const sqlReservas = `DELETE FROM reservas WHERE id_cliente = ?`;

    connection.query(sqlReservas, [id], (erroReservas) => {
        if (erroReservas) {
            console.log(erroReservas);
            return res.status(500).json({ erro: erroReservas.message });
        }

        // Depois deleta o cliente
        const sqlCliente = `DELETE FROM clientes WHERE id = ?`;
        connection.query(sqlCliente, [id], (erroCliente, resultado) => {
            if (erroCliente) {
                console.log(erroCliente);
                return res.status(500).json({ erro: erroCliente.message });
            }

            return res.json({ message: 'Cliente deletado com sucesso', id: id });
        });
    });
});

// ------------------------------------------------------------------------------------------------------------------------
//Reservas

server.get('/reservas', (req, res) => {
    const sql = 'SELECT * FROM reservas';

    connection.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado);
    });
});

server.get('/reservas/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM reservas WHERE id = ?`;

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado[0]);
    });
});

server.post('/reservas', (req, res) => {
    const id_cliente = req.body.id_cliente;
    const id_destino = req.body.id_destino;
    const data_viagem = req.body.data_viagem;

    const sql = `INSERT INTO reservas (id_cliente, id_destino, data_viagem) VALUES (?, ?, ?)`;

    connection.query(sql, [id_cliente, id_destino, data_viagem], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Reserva cadastrada com sucesso', id: resultado.insertId, id_cliente: id_cliente, id_destino: id_destino, data_viagem: data_viagem });
    });
});

server.put('/reservas/:id', (req, res) => {
    const id = req.params.id;
    const id_cliente = req.body.id_cliente;
    const id_destino = req.body.id_destino;
    const data_viagem = req.body.data_viagem;

    const sql = `UPDATE reservas SET id_cliente = ?, id_destino = ?, data_viagem = ? WHERE id = ?`;

    connection.query(sql, [id_cliente, id_destino, data_viagem, id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Reserva atualizada com sucesso', id: id, id_cliente: id_cliente, id_destino: id_destino, data_viagem: data_viagem });
    });
});

server.delete('/reservas/:id', (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM reservas WHERE id = ?`;

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json({ message: 'Reserva deletada com sucesso', id: id });
    });
});
// ------------------------------------------------------------------------------------------------------------------------
// Consultas

server.get('/reservas/cliente/:id_cliente', (req, res) => {
    const id_cliente = req.params.id_cliente;
    const sql = 'SELECT * FROM reservas WHERE id_cliente = ?';

    connection.query(sql, [id_cliente], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado);
    });
});

server.get('/reservas/destino/:id_destino', (req, res) => {
    const id_destino = req.params.id_destino;
    const sql = 'SELECT * FROM reservas WHERE id_destino = ?';

    connection.query(sql, [id_destino], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado);
    });
});

server.get('/clientes-ordenados', (req, res) => {
    const sql = 'SELECT * FROM clientes ORDER BY nome ASC';

    connection.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.json(resultado);
    });
});

server.listen(3009, () => {
    console.log("Servidor rodando na porta 3009");
});
