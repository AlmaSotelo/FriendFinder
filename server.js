// Dependencias
//==========================================
var express = require("express");
// importing our extarnal files.
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

// sets up the Express app
//==========================================
var app = express();
// Sets an initial port. We"ll use this later in our listener
// using precess.env.PORT to avoid PORT conflict when deployed in Heruko
var PORT = process.env.PORT || 8080;

// middleware to enable Express to allow us to serve static files.
app.use(express.static('app/public'));
// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router (this is used in coneccion to express.Routers() in apiRoutes.js and in htmlRoutes.js
//==========================================
app.use('/', htmlRoutes); 
app.use('/api', apiRoutes);


// LISTENER
app.listen(PORT, function() {
   console.log("App listening on PORT: " + PORT);
 });