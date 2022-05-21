const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const CadastroUsuario = require('./models/CadastroUsuario')
const path = require("path")

var handle = handlebars.create({defaultLayout: 'main'});

// Public
    app.use(express.static(path.join(__dirname, "public")))

// Config
    // Template engine
        app.engine('handlebars', handle.engine);
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(express.urlencoded({extended: false}))
        app.use(express.json())

// Rotas
app.get('/editarPerfil', function(req, res){
    res.render('editarPerfil')/*
    CadastroUsuario.findOne({where: {'id': req.params.id}}).then(function(){
        res.send(req.body.nome)
    }).catch(function(erro){
        res.send("algo de errado")
    })*/
}),
    

// PAGINAS
app.get("/",function(req,res){
    res.render('home');
}),

app.get("/cadastro",function(req,res){
    res.render('formCadastro');
}),

app.get("/login",function(req,res){
    res.render('formLogin');
}),

app.get("/exercicio",function(req,res){
    res.render('exercicio')
})

app.get("/listaDeExercicios",function(req,res){
    res.render('listaDeExercicios')
})

app.post("/dadosCadastro", function(req, res){
    CadastroUsuario.create({
        id: null,
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        createdAt: null,
        updatedAt: null
    }).then(function(){
        res.redirect('/editarPerfil')
    }).catch(function(erro){
        res.send("houve um erro: " + erro)
    })
})


//app.use('/home', router);

app.listen(3000, function(){
    console.log("servidor rodando na URL http://localhost:3000");
});