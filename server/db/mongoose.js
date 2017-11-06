var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

module.exports = {
  mongoose
};
