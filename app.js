/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var widgets = require('./routes/widgets');
var cloudExplorer = require('./routes/cloudExplorer');
var page = require('./routes/page');
var http = require('http');
var path = require('path');
var unifile = require('unifile');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// config
var options = unifile.defaultConfig;
/*
// add static folders
options.staticFolders.push(
    // file browser
    {
            name: "/cloud-explorer",
            path: "../../../../lib/app/"
    }
);
*/
// use unifile as a middleware
app.use(unifile.middleware(express, app, options));
app.get('/', routes.index);
app.get('/widgets', widgets.index);
app.get('/cloud-explorer', cloudExplorer.index);
app.get('/page', page.index);

// server 'loop'
var port = process.env.PORT || 6805; // 6805 is the date of sexual revolution started in paris france 8-)
app.listen(port, function() {
    console.log('Listening on ' + port);
});

app.get('/download/:path/:content', function(req, res) {
    var path = decodeURIComponent(req.params.path);
    var filename = path.split('/');
    filename = filename[filename.length - 1];
    var content = new Buffer(req.params.content, 'base64').toString('ascii');

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', 'application/octet-stream');

    res.send(content);
});

// catch all errors and prevent nodejs to crash, production mode
process.on('uncaughtException', function(err) {
    console.log('---------------------');
    console.error('---------------------', 'Caught exception: ', err, '---------------------');
    console.log('---------------------');
});
/*// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
*/