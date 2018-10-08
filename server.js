require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODDB_URI, {useNewParser: true})
const connection = mongoose.connection
connection.on('connected', ()=>{
    console.log('a successful connection msg goes here')
})
connection.on('error', (err)=>{
    console.log('failed to connect msg goes here: ' + err)
})

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + '/client/build')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

module.exports = app;
