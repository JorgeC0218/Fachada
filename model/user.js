var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  location: String,
  ranking: Number,
  bio: String,
  userPic: {},
  whatsApp: Number,
  facebook: String,
  memberSince: Date,
  reviews: {
    starRank: Number,
    userPic: {},
    title: String,
    description: String
  },
  jobPost: {
    description: String,
    image: {},
    userPic: {},
    location: String,
    ranking: Number,
    memberSince: Date
  }
});

var Users = module.exports = mongoose.model('Users', userSchema);