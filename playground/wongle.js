const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/WongleApp', (err, client) => {
    if (err) {
        return console.log('Unnable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('WongleApp')

    db.collection('Wongles').insertMany([
        {
            idNumber: 0,
            supplier: 'New Co Ltd',
            product: 'Small wongle',
            price: 5
        },
        {
            idNumber: 1,
            supplier: 'New Co Ltd',
            product: 'Large wongle',
            price: 8
        },
        {
            idNumber: 2,
            supplier: 'New Co Ltd',
            product: 'Super wongle',
            price: 12
        },
        {
            idNumber: 3,
            supplier: 'Old Co Ltd',
            product: 'Mini wongle',
            price: 4
        },
        {
            idNumber: 4,
            supplier: 'Old Co Ltd',
            product: 'Small wongle',
            price: 6
        },
        {
            idNumber: 5,
            supplier: 'Old Co Ltd',
            product: 'Large wongle',
            price: 9
        },
        {
            idNumber: 6,
            supplier: 'Old Co Ltd',
            product: 'Super wongle',
            price: 13
        }
    ], (err, result) => {
        if (err) {
            return console.log('Unable to insert wongle', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});