var express = require('express');
var app = express();

app.use(require('./controllers'))

var port = 8080;
var server = app.listen(port, function(){
    console.log('Server is listening on port', port);
});
