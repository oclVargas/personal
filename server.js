var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
const User = require('./models/User');
const { validationResult } = require('express-validator');
require('dotenv').config()

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/contact.html'); //if html file is root directory
  });

app.post('/', function(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const newUser = new User({
        username: req.body.name,
        message: req.body.details
    })

    newUser.save(err => {
        if (err) res.send("Hey there was an error. Try again :-)")

        res.send("Hey so this is kind of embarrassing but I don't really know how to send you back to the homepage from here but I got your message and Lamont will see it. Thanks :-)")
    })

});

app.listen(process.env.PORT || 8080, function() {
    console.log('Server running at http://127.0.0.1:8080/');
});