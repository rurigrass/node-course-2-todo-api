// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unnable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // // FINDS SPECIFIC OBJECT WITH MATCHING ID
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b87d8fad476d9d577cc915d')
    // }).toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log("unable to fetch todos", err);
    //     });

    // // COUNTS NUMBER OF OBJECTS
    // db.collection('Todos').find().count().then((count) => {
    //         console.log(`Todos count: ${count}`);
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log("unable to fetch todos", err);
    //     });

    //  FINDS ALL USERS WITH NAME RUAIRIDH
    db.collection('Users').find({name: "Ruairidh"}).toArray().then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log("unable to fetch todos", err);
        });

   


    // db.close();
});