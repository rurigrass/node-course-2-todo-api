// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unnable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //FIND ONE AND UPDATE
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b87d8fad476d9d577cc915d')
    // }, {
    //         $set: {completed: true}
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    //FIND ONE AND UPDATE
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b87db1c8ff3bcd5dccbe907')
    }, {
            $set:{name: 'Ruairidh'},
            $inc:{age:1}
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    // db.close();
});