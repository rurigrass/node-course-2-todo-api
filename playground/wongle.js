const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/WongleApp', (err, client) => {
    if (err) {
        return console.log('Unnable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('WongleApp')

    db.collection('Wongles').insertOne({
        Supplier: 'New Co Ltd',
        Product: 'Small wongle',
        Price: 5
    }, (err, result) =>{
        if (err) {
            return console.log('Unable to insert wongle', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    client.close();
});