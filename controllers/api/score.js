var Score = require('../../models/scores')
var router = require('express').Router()

router.get('/api/scores', function (req, res, next) {
    Score.find()
    .sort('-date')
    .exec(function(err, scores) {
        if (err) { return next(err) }
        res.json(scores)
    })
})

router.post('/api/scores', function (req, res, next) {
    var score = new Score({points: req.body.score})
    //score.username = req.auth.username
    score.save(function (err, post) {
        if (err) { return next(err) }
        res.status(201).json(post)
    })
})

module.exports = router;
