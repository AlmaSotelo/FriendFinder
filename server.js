// Dependencias
//==========================================
var express = require("express");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

// sets up the Express app
//==========================================
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));
// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
//==========================================
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// LISTENER
app.listen(PORT, function() {
   console.log("App listening on PORT: " + PORT);
 });