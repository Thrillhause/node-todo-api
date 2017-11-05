// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var dbUrl = 'mongodb://localhost:27017/TodoApp';

// Connect to MongoDB
MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // // Insert fields into new collection
  // db.collection('Users').insertOne({
  //   name: 'Dean',
  //   age: 32,
  //   location: 'California'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

//insert to users (name, age, location)
