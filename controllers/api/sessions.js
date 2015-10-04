var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/', function (req, res, next) {
    //db.User.drop()
    User.findOne({username: req.body.username}, {username: 1, password: 1}, function (err, user) {
        if (err) { return next(err) }
        if (!user) { return res.sendStatus(401) }
        //bcrypt.compare(req.body.password, user.password, function (err, valid) {
        if (req.body.password === user.password) {
            //console.log('####################\n',valid)
            //if (err) { return next(err) }
            //if (!valid) { return res.sendStatus(401) }
            var token = jwt.encode({username: user.username}, config.secret)
            res.send(token)
        }
    })
})

module.exports = router
