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
    
//--------------------------------------------------------

// PAGINAS ESTATICAS
app.get("/",function(req,res){
    res.render('home');
}),

app.get("/calculadoraTMB",function(req,res){
    res.render('calculadoraTMB')
}),

app.get("/listaDeTreinos",function(req,res){
    res.render('listaDeTreinos')
})

//--------------------------------------------------------

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

// EXERCICIO SELECIONADO

app.get("/exercicioDeCardio/:idExercicio",function(req,res){
    TreinoCardio.findAll({where: {'idExercicio': req.params.idExercicio}}).then(function(exerciciosCardio){
        res.render('exercicioDeCardio', {exerciciosCardio: exerciciosCardio});
        console.log(exerciciosCardio)
    })
}),

app.get("/exercicioDeMusculacao/:idExercicio",function(req,res){
    TreinoMusculacao.findAll({where: {'idExercicio': req.params.idExercicio}}).then(function(exerciciosMusculacao){
        res.render('exercicioDeMusculacao', {exerciciosMusculacao: exerciciosMusculacao});
        console.log(exerciciosMusculacao)
    })
}),

app.get("/exercicioDeFuncional/:idExercicio",function(req,res){
    TreinoFuncional.findAll({where: {'idExercicio': req.params.idExercicio}}).then(function(exerciciosFuncional){
        res.render('exercicioDeFuncional', {exerciciosFuncional: exerciciosFuncional});
        console.log(exerciciosFuncional)
    })
}),

app.get("/exercicioDeHiit/:idExercicio",function(req,res){
    TreinoHiit.findAll({where: {'idExercicio': req.params.idExercicio}}).then(function(exerciciosHiit){
        res.render('exercicioDeHiit', {exerciciosHiit: exerciciosHiit});
        console.log(exerciciosHiit)
    })
}),

//--------------------------------------------------------

/*
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
})*/


app.listen(3000, function(){
    console.log("servidor rodando na URL http://localhost:3000");
});