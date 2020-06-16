const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

//ejs
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    app.use(express.static('public'))

//Body Parser

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())


//Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost/bbcpersonalizados").then(() => {
        useNewUrlParser: true
        console.log("Mongo conectado...")
    }).catch((err) => {
        console.log("Ha um erro ao se conectar com o mongo "+err)
    })

//Rotas

    app.get("/", (req, res) => {
        res.render("pages/index")
    })
    app.get("/copos", (req, res) => {
        res.render("pages/page-copos")
    })





app.use('/admin', admin)
const PORT = 3000
app.listen(PORT, function() {
    console.log("Servidor rodando...")
})
