const express = require("express");

const server = express();

server.use(express.json());

const livros = ["Diario de um banana", "Harry potter", "Menino maluquinho", "Turma da monica"]

//Metodo hhttp GET
//Listar todos os livros
//Localhost:3001/livros
server.get('/livros', (req, res) => {
    return res.json(livros)
})

//Get com Route params
//localhost:3001/livros/2
server.get('/livros/:id', (req, res) => {
    const id = req.params.id
    return res.json(livros[id])
})

//Metodo http POST
//Criando um novo livro
//local host:3001/livros
//{"nome": "Diario de um banana"}
server.post('/livros', (req, res) => {
    const titulo = req.body.titulo
    livros.push(titulo)
    return res.json(livros)
})

//metodo http PUT
//atualizar um livro
//localhost:3001/livros/0
server.put('/livros/:id', (req, res) => {
    const id = req.params.id
    const titulo = req.body.titulo
    livros[id] = titulo
    return res.json(livros)
})

// metodo http DELETE
//Deletar um livro
//localhost:3001/livros/2
server.delete('/livros/:id', (req, res) => {
    const id = req.params.id
    livros.splice(id, 1)
    return res.json(livros)
})

server.listen(3001, () => {
    console.log('Servidor rodando na porta 3001')
})
