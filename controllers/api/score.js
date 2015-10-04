var Score = require('../../models/scores')
var router = require('express').Router()

router.get('/', function (req, res, next) {
    Score.find().sort({points: -1})
    .exec(function(err, scores) {
        console.log('asdf',scores)
        if (err) { return next(err) }
        res.json(scores)
    })
})

router.put('/', function (req, res, next) {
    Score.findOneAndUpdate({username:req.body.username}, {score: req.body.score}, {new:true}, function (err, s) {
        res.send(201).json(s)
    })
})

router.post('/api/scores', function (req, res, next) {
    var score = new Score({points: req.body.points})
    //score.username = req.auth.username
    score.username = req.body.username
    score.save(function (err, s) {
        if (err) { return next(err) }
        res.status(201).json(s)
    })
})

module.exports = router;
