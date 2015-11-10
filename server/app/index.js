'use strict';
var path = require('path');
var express = require('express');
var app = express();
module.exports = app;
var mongoose = require('mongoose');
var View = mongoose.model('View');

// Pass our express application pipeline into the configuration
// function located at server/app/configure/index.js
require('./configure')(app);

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
var clientSite = "http://localhost:1337"

// WRITE ALL ROUTES HERE, WHY NOT!!
app.post('/', function(req, res, next) {
	console.log('before if', req.body)
	if (req.body.checkout || req.body.product) {
		console.log('become a thing', req.body)
		View.create(req.body)
		.then(function(newView) {
			console.log('it\'s a thing', review)
			res.setHeader('Access-Control-Allow-Origin', clientSite);
			res.status(201).send(newView);
		})
		.then(null, next)
	}
});

app.get('/', function(req, res, next) {
	View.find({})
	.then(function(views) {
		console.log('HI');
		res.status(200).json(views);
	});
});


app.use('/api', require('./routes'));

/*
 This middleware will catch any URLs resembling a file extension
 for example: .js, .html, .css
 This allows for proper 404s instead of the wildcard '/*' catching
 URLs that bypass express.static because the given file does not exist.
 */
app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});

app.get('/*', function (req, res) {
    res.sendFile(app.get('indexHTMLPath'));
});

// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
