// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unnable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // // INSERTS ONE OBJECT TO 'TODOS' COLLECTION
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // INSERTS ONE OBJECT TO 'USERS' COLLECTION
    db.collection('Users').insertOne({
        name: 'Ruairidh',
        age: 24,
        location: 'Gullane'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });
    
    db.close();
});