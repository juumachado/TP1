const port = 8080;

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
response.render('form')
});

app.get('/eclipse', (request, response) => {
    const nums = {
    n1: request.query.n1,
    n2: request.query.n2,
    resultado:  parseFloat(n1) + parseFloat(n2)
    }
    request.render('eclipse', {nums})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});