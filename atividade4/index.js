const express = require('express');
const estoque = require('./estoque');

const app = express();
const PORT = 8080;

app.get('/', (request, response) => {
    let html = '<h1>Bem-vindo ao estoque</h1>';
    html += '<h3>Manipule seu estoque com os seguintes comandos:</h3>';
    html += '<p>/adicionar/:id/:nome/:quantidade</p>';
    html += '<p>/listar </p>';
    html += '<p>/remover/:id</p>';
    html += '<p>/editar/:id/:quantidade</p>'

    response.send(html);
});

app.get('/adicionar/:id/:nome/:quantidade', (request, response) => {
    let id = Number(request.params.id);
    let nome = request.params.nome;
    let quantidade = Number(request.params.quantidade);

    response.send(estoque.adicionar(id, nome, quantidade));
})

app.get('/listar', (request, response) => {
    response.send(estoque.listar());
})

app.get('/remover/:id', (request, response) => {
    let id = Number(request.params.id);
    response.send(estoque.remover(id));
})

app.get('/editar/:id/:quantidade', (request, response) =>{
    let id = Number(request.params.id);
    let quantidade = Number(request.params.quantidade);

    response.send(estoque.editar(id, quantidade))
})

app.listen(PORT, ()=> {
    console.log('FUNCIONO NA PORTA: ' + PORT);
});