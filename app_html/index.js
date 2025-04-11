const express = require("express");
const mustacheExpress = require('mustache-express')
const app = express();

const PORT = 8080;

app.engine('html', mustacheExpress())
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

app.get('/ola/:nome', (request, response) => {
    let nome = request.params.nome;
    response.render('index.html', {nome});
})

app.listen(PORT, ()=>{
    console.log('YES!' + PORT)
});