/*importa o framework express 
const express = require('express');
//cria a aplicação do servidor
//A variavel server representa o backend que recebe as requisições 
const server = express();

// define uma rota do tipo get
server.get('/curso', (req, res) => {
    return res.json({curso: 'node.js'});
});

//Listen() faz o servidor começar  a escutar as requisições na porta determinada
server.listen(3001, () => {
    console.log('Servidor rodando na porta 3000');
}); 
*/

const express = require("express");
const server = express();

server.use(express.json());

const cursos = ["Nodejs", "JavaScript", "React Native"];
//Query params = ?nome=Nodejs
//route params = /curso/2
//request body = { "nome": "Nodejs", "tipo": "Backend" }
server.get("/cursos", (req, res) => {
  const nome = req.query.nome;
  return res.json({ curso: `Aprendendo ${nome}` });
});

//Rota 2 com: Route params
server.get("/curso/:id", (req, res) => {
  const id = req.params.id;
  return res.json(cursos[id]);
});

//========================================
//Metodo hhttp GET
//Listar todos os cursos
//Localhost:3055/cursos
server.get("/curso", (req, res) => {
  return res.json(cursos);
});

//Metodo http POST
//Criando um novo curso
//local host:3000/curso
//{"nome": "Curo de Python"}

server.post("/curso", (req, res) => {
  //Desestrutura a propriedade "name" enviada no corpo da requisição
  const nome = req.body.nome;
  //adicina nvo curso no array cursos
  cursos.push(nome);
  //retorna a lista de cursos atualizada
  return res.json(cursos);
});

//metodo http PUT
//atualizar um curso
//localhost:3000/curso/0
server.put('/curso/:id', (req, res) => {

    const id = req.params.id
    const nome = req.body.nome

    cursos[id] = nome
    return res.json(cursos)
})

// metodo http delete
// Deletar um curso
//localhost:3000/curso/2
server.delete('/curso/:id', (req, res) => {
    const id = req.params.id
    cursos.splice(id, 1)
    return res.json(cursos)
})

server.listen(3055, () => {
  console.log("Servidor rodando na porta 3055");
});

