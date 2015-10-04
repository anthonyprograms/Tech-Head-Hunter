var mongoose = require('mongoose');

mongoose.connect('mongodb://test:123@ds027744.mongolab.com:27744/techhead', function () {
        console.log('MongoDB conntected');
});

module.exports = mongoose;
