var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:3000/fachada');

var db = mongoose.connection;

db.on('connected', () => {
  console.log('it worked!!!');
});

db.on('error', (err) => {
  console.log('you suck' + err);
});
db.on('disconnected', () => {
  console.log('it stopped working :c');
});
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Y u close my app?')
    process.exit(0);
  });
});

require('./schema.js');