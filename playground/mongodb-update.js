// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var dbUrl = 'mongodb://localhost:27017/TodoApp';

// Connect to MongoDB
MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  //
  // db
  //   .collection('Todos')
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID('59ff6bb78b8df57e4e34204a')
  //     },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then(result => {
  //     console.log(result);
  //  });

  db
    .collection('Users')
    .findOneAndUpdate(
      {
        _id: new ObjectID('59fbabae8d1ab92c6d4ba63b')
      },
      {
        $set: {
          name: 'Dean'
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
  // db.close();
});
