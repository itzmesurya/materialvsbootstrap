/** get all the required packages */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

/** setup the port for serving */

var port = process.env.PORT || 1400

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/** setup the router for any api calls */
var router = express.Router();

/** setup the app server to listen */
app.listen(port, function () {
    console.log("Express server setup to listen at port: " + port);
});