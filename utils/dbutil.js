var mongoose = require('mongoose');

mongoose.connect('mongodb://' + process.env.IP + '/test', function(){
  console.log('Mongodb connected');
});

module.exports = mongoose;