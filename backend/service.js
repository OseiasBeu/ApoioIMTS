const express = require('express');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/IMTS";
const mongoose=require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();
const port = 3000;

MongoClient.connect(url, (err,client) =>{
    if(err) return console.log(err)
    db = client.db('IMTS')

    app.listen(3000,()=>{
        console.log("Servidor funcionando na porta 3000!")
    })
})

// mongoose.connect('mongodb://localhost:27017/IMTS',function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Banco de dados Conectado com Sucesso!");
//     }
// });

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// =========================---MÉTODOS DE CONSULTA---=================================
app.get('/', (req, res) => {
    res.send('<h1>API em funcionamento!</h1>');
    let cursor = db.collection('apoio').find()
    console.log(cursor)
});

app.get('/ChoicePlace', function (req, res) {
    db.collection('apoio').find().toArray(function (erro, dados) {
        if (erro) {
            res.status(500).send('Aconteceu um ERRO!!!!');
            return;
        }
        res.send(dados);
    });
});

// ===================================================--- FIM DOS MÉTODOS ---===============================

// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
//     console.log('para desligar pressione: ctrl + c');
// });
