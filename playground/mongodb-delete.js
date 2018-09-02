// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unnable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //  DELETE MANY
    //    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //        console.log(result);
    //    });

    // DELETE ONE
    //    db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //         console.log(result);
    //    });

    //    // FIND ONE AND DELETE
    //    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //        console.log(result);
    //    })

    // //FIND ONE DELETE SPECIFIC ID
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5b8c18f88676a7229b961271')
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));  
    // });

    // //FIND ONE DELETE ALL WITH NAME RUAIRIDH
    // db.collection('Users').deleteMany({name: 'Ruairidh'});




    // db.close();
});