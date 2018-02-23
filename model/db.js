var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/Fachada');

var db = mongoose.connection;

db.connection.on('connected', () => {
  console.log('it worked!!!');
});
db.connection.on('error', (err) => {
  console.log('you suck' + err);
});
db.connection.on('disconnected', () => {
  console.log('it stopped working :c');
});
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Y u close my app?')
    process.exit(0);
  });
});

require('./model/schema.js');