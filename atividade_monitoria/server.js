const express = require('express')
const app = express()

var contador = 0

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("form", {cont: contador})
})
app.post("/dados", (req, res) => {
    if (!req.body.nomezinho == " "){
        res.send("Dados recebidos com sucesso!")
    }else {
        res.send("Erro.")
    }
})

app.get("/contador", (req, res) => {
    contador++
    res.redirect('/')
})


app.listen(8080)