// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var dbUrl = 'mongodb://localhost:27017/TodoApp';

// Connect to MongoDB
MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db
  //   .collection('Todos')
  //   .deleteMany({text: 'Eat lunch'})
  //   .then(
  //     result => {
  //       console.log('Item successfully deleted');
  //       console.log(result);
  //     },
  //     err => {
  //       console.log('Unable to delete Item');
  //     }
  //   );

  // deleteOne
  // db
  //   .collection('Todos')
  //   .deleteOne({text: 'Eat lunch'})
  //   .then(
  //     result => {
  //       console.log('Item successfully deleted');
  //       console.log(result);
  //     },
  //     err => {
  //       console.log('Unable to delete Item');
  //     }
  //   );

  // findOneAndDelete
  // db
  //   .collection('Todos')
  //   .findOneAndDelete({completed: false})
  //   .then(
  //     result => {
  //       console.log('Item successfully deleted');
  //       console.log(result);
  //     },
  //     err => {
  //       console.log('Unable to delete Item');
  //     }
  //   );

  db
    .collection('Users')
    .deleteMany({name: 'Dean'})
    .then(
      result => {
        console.log('User successfully deleted');
        console.log(result);
      },
      err => {
        console.log('Unable to delete Item');
      }
    );

  db
    .collection('Users')
    .findOneAndDelete({
      _id: new ObjectID('59ff5d76a40f88053d72d848')
    })
    .then(
      result => {
        console.log('User successfully deleted');
        console.log(result);
      },
      err => {
        console.log('Unable to delete Item');
      }
    );
  // db.close();
});
