var Score = require('../../models/scores')
var router = require('express').Router()

router.get('/api/scores', function (req, res, next) {
    Score.find()
    //.sort('score')
    .exec(function(err, scores) {
        console.log('asfd',scores)
        if (err) { return next(err) }
        res.json(scores)
    })
})

router.put('/api/scores', function (req, res, next) {
    Score.findOneAndUpdate({username:req.body.username}, {score: req.body.score}, {new:true}, function (err, s) {
        res.send(201).json(s)
    })
})

router.post('/api/scores', function (req, res, next) {
    var score = new Score({points: req.body.score})
    score.username = req.auth.username
    score.save(function (err, s) {
        if (err) { return next(err) }
        res.status(201).json(s)
    })
})

module.exports = router;
