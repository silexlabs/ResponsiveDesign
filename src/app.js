var express = require("express");
var unifile = require("unifile");

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Accueil');
})
.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page Introuvable');
});

app.listen(process.env.PORT || 8080);
