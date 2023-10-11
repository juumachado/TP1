const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
res.render('Atividade')
})

app.post('/app',(req, res) => {
const data = {
nome: req.body.nome,
sobrenome: req.body.sobrenome
}
res.render('teste', {data})
})

app.listen(3030, () => {
console.log(`server funcionando na porta https://localhost:3030`)
})