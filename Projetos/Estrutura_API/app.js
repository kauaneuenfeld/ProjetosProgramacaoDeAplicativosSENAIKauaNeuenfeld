//importa o framework express 
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