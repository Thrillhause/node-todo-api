const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });
// Todo.findOneAndRemove
//
// Todo.findByIdAndRemove('5a00e05fb0c4397af5418057').then(todo => {
//   console.log(todo);
// });
//
// Todo.findOneAndRemove({_id: '5a00e05fb0c4397af5418057'}).then(todo => {
//   console.log(todo);
// });
