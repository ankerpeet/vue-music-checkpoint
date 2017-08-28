var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var sessions = require('./authentication/sessions')
var authRoutes = require('./authentication/auth-routes')
var listRoutes = require('./routes/favorites-routes')
var server = express();
var port = process.env.PORT || 3000;
var cors = require('cors')



//MIDDLEWARE
server.use(sessions)
server.use(cors())
server.options('*', cors())
server.use(express.static(__dirname + "/../public/"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))



server.use('/', authRoutes)
server.use('/api/lists', listRoutes)

server.listen(port, () => {
    console.log("starting up server, on port", port)
})

var dbConnect = require("./config/db/mlab-config");
