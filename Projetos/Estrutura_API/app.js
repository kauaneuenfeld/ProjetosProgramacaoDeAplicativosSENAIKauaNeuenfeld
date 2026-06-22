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

const express = require('express');
const server = express();

const cursos = ['Nodejs', 'JavaScript', 'React Native'];
//Query params = ?nome=Nodejs
//route params = /curso/2
//request body = { "nome": "Nodejs", "tipo": "Backend" }
server.get('/cursos', (req, res) => {
    const nome = req.query.nome;
    return res.json({curso: `Aprendendo ${nome}`});
});

//Rota 2 com: Route params
server.get('/curso/:id', (req, res) => {
    const id = req.params.id;
    return res.json(cursos[id]);
}); 

//========================================
//Metodo hhttp GET
//Listar todos os cursos
//Localhost:3055/cursos
server.get('/curso', (req, res) => {
    return res.json(cursos);
});



server.listen(3055, () => {
    console.log('Servidor rodando na porta 3055');
});
