let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    // if (err) throw err;
    // let arquibancada = []
    let dbo = db.db('IMTS');
    for (let cadeira = 1; cadeira <= 100; cadeira++) {
        // dictionaryobj.Add(key, item)
        // arquibancada.add({ A: cadeira, occupation: false });
        dbo.collection('apoio').insertOne({H:cadeira,occupation: false},
            function (err, res) {
                // if (err) throw err;
                console.log(`Cadeira:${cadeira} do Bloco:H inserida com sucesso na base!`);
                db.close();
            });
    };
})