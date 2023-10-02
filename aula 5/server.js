const express = require('express')
const { empty } = require('statuses')
const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("form")
})
app.post("/dados", (req, res) => {
    if (!req.body.nomezinho == " "){
        res.send("Dados recebidos com sucesso!")
    }else {
        res.send("Erro.")
    }
})


app.listen(8080)