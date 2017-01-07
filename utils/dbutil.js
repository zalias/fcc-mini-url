var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbname', function(){
    console.log('Mongodb connected');
});

module.exports = mongoose;