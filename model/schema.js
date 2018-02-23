var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  name: String,
  location: String,
  ranking: Number,
  bio: String,
  user_pic: {},
  whatsApp: Number,
  facebook: String,
  memberSince: Date,
  reviews: {
    star_rank: Number,
    user_pic: {},
    title: String,
    description: String
  }
});

var Worker = mongoose.model('worker', User);
var worker_user = new Worker({
  name: 'jack',
  location: 'Cdmx',
  ranking: 3.5,
  bio: 'all about node',
  whatsApp: 8675309,
  facebook: 'url'
}
});