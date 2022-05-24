const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const CadastroUsuario = require('./models/CadastroUsuario')
const path = require("path");
const TreinoCardio = require('./models/Cardio');
const TreinoFuncional = require('./models/Funcional');
const TreinoHiit = require('./models/Hiit');
const TreinoMusculacao = require('./models/Musculacao');

var handle = handlebars.create({defaultLayout: 'main'});

// Public
    app.use(express.static(path.join(__dirname, "public")))

// Config
    // Template engine
        app.engine('handlebars', handlebars.engine({ 
            defaultLayout: 'main', 
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true, 
            },    
        }))
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

// PAGINAS PARA CADA TIPO DE TREINO


app.get("/exerciciosCardio",function(req,res){
    TreinoCardio.findAll().then(function(exerciciosCardio){
        console.log(exerciciosCardio)
        res.render('exerciciosCardio', {exerciciosCardio: exerciciosCardio})
    })
})

app.get("/exerciciosMusculacao",function(req,res){
    TreinoMusculacao.findAll().then(function(exerciciosMusculacao){
        console.log(exerciciosMusculacao)
        res.render('exerciciosMusculacao', {exerciciosMusculacao: exerciciosMusculacao})
    })
})

app.get("/exerciciosFuncional",function(req,res){
    TreinoFuncional.findAll().then(function(exerciciosFuncional){
        console.log(exerciciosFuncional)
        res.render('exerciciosFuncional', {exerciciosFuncional: exerciciosFuncional})
    })
})

app.get("/exerciciosHiit",function(req,res){
    TreinoHiit.findAll().then(function(exerciciosHiit){
        console.log(exerciciosHiit)
        res.render('exerciciosHiit', {exerciciosHiit: exerciciosHiit})
    })
})

//--------------------------------------------------------

app.get("/listaDeTreinos",function(req,res){
    res.render('listaDeTreinos')
})

app.get("/calculadoraTMB",function(req,res){
    res.render('calculadoraTMB')
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