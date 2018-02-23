var mongoose = require('mongoose'),
  Users = mongoose.model('Users');

exports.index = function(req, res) {
  Users.create({
    name: 'jack',
    location: 'Cdmx',
    ranking: 3.5,
    bio: 'all about node',
    whatsApp: 8675309,
    facebook: 'url',
    memberSince: Date.now()
  }, function(err, user) {
    var strOutput;
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    if (err) {
      console.log(err);
      strOutput = 'You screwed up big time bruh';
    } else {
      console.log('Users created: ' + user);
    }
    res.write(strOutput);
    res.end();
  });
};