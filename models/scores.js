var db = require('../db');
var score = db.Schema({
    username: {type:String, required: true},
    points: {type:String, required: true}
});

module.exports = db.model('Score', score);
