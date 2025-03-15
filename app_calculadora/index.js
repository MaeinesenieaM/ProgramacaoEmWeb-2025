const express = require('express');
const calc = require('./calculadora');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('SOCORRO ME AJUDA!');
});

app.listen(PORT, ()=> {
    console.log('FUNCIONO NA PORTA: ' + PORT);
});