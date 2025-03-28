const express = require('express');
const calc = require('./calculadora');

const app = express();

const PORT = 8080;

app.get('/', (request, response) => {
    let html = '<h1>app_calculadora</h1>';
    html += '<h3>Coisas de uma calculadora</h3>';
    html += '<p>/somar/:a/:b (<a href="/somar/2/3">somar/2/3</a>) </p>';
    html += '<p>/subtrair/:a/:b (<a href="/subtrair/2/3">subtrair/2/3</a>) </p>';
    html += '<p>/multiplicar/:a/:b (<a href="/multiplicar/2/3">multiplicar/2/3</a>) </p>';
    html += '<p>/dividir/:a/:b (<a href="/dividir/2/3">dividir/2/3</a>) </p>'

    response.send(html);
});

app.get('/somar/:a/:b', (request, response) => {
    let a = Number(request.params.a);
    let b = Number(request.params.b);

    let resultado = calc.somar(a, b)

    if (isNaN(resultado)) {
        response.send("Um erro ocorreu durante o calculo.")
    } else {
        response.send(`${a} + ${b} = ${resultado}`);
    }
})

app.get('/subtrair/:a/:b', (request, response) => {
    let a = Number(request.params.a);
    let b = Number(request.params.b);

    let resultado = calc.subtrair(a, b)

    if (isNaN(resultado)) {
        response.send("Um erro ocorreu durante o calculo.")
    } else {
        response.send(`${a} + ${b} = ${resultado}`);
    }
})

app.get('/multiplicar/:a/:b', (request, response) => {
    let a = Number(request.params.a);
    let b = Number(request.params.b);

    let resultado = calc.multiplicar(a, b)

    if (isNaN(resultado)) {
        response.send("Um erro ocorreu durante o calculo.")
    } else {
        response.send(`${a} + ${b} = ${resultado}`);
    }
})

app.get('/dividir/:a/:b', (request, response) => {
    let a = Number(request.params.a);
    let b = Number(request.params.b);

    let resultado = calc.dividir(a, b)

    if (isNaN(resultado)) {
        response.send("Um erro ocorreu durante o calculo.")
    } else {
        response.send(`${a} + ${b} = ${resultado}`);
    }
})

app.listen(PORT, ()=> {
    console.log('FUNCIONO NA PORTA: ' + PORT);
});