var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  location: String,
  ranking: Number,
  bio: String,
  userPic: String,
  whatsApp: Number,
  facebook: String,
  memberSince: Date,
  reviews: {
    starRank: Number,
    userPic: String,
    title: String,
    description: String
  },
  jobPost: {
    description: String,
    image: String,
    userPic: String,
    location: String,
    ranking: Number,
    memberSince: Date
  }
});

var Users = module.exports = mongoose.model('Users', userSchema);