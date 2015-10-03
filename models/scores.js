var db = require('../db');
var score = db.Schema({
    points: {type:String, required: true}
});

module.exports = db.model('Score', score);
