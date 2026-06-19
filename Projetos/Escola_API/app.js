const express = require('express');
const server = express();

server.get('/alunos', (req, res) => {
    res.json({"Nome": "Kaua", "Idade": 16, "Curso": "desenvolvimento de sistemas"});
});

server.get('/professores', (req, res) => {
    res.json({ "Nome": "Andre", "Idade": 37, "Discplina": "desenvolvimento de sistemas" });
})

server.get('/escolas', (req, res) => {
    res.json({ "Nome": "Senai", "Cidade": "Jaragua do sul" });
})

server.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});