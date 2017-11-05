// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var dbUrl = 'mongodb://localhost:27017/TodoApp';

// Connect to MongoDB
MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db
    .collection('Users')
    .find({name: 'Dean'})
    .toArray()
    .then(
      docs => {
        console.log('User: ');
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log('Unable to retrieve user');
      }
    );
  db.close();
});
