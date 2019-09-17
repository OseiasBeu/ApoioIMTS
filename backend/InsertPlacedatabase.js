let MongoClient = require('mongodb').MongoClient;


let url = 'mongodb+srv://admin:26031998boxe@@cluster0-b3pli.mongodb.net/IMTS'
console.log(`=================================================`)
console.log(`INSERINDO CADEIRAS!!!`)
console.log(`=================================================`)

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) return console.log(err)
    db = client.db('IMTS')
    //return
    for (let cadeira = 1; cadeira <= 100; cadeira++) {
        // dictionaryobj.Add(key, item)
        db.collection('apoio').insertOne({ H: cadeira, occupation: false },
            function (err, res) {
                // if (err) throw err;
                console.log(`Cadeira:${cadeira} do Bloco:H inserida com sucesso na base!`);
            });
        
    }       
})
