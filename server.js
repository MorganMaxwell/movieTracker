// requiring the express package
var express = require("express");
var app = express();
// express requirements for serving all the HTML stuff?
app.use(express.static("public"));
// this is to convert stuff to JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// PORT to run application on
var PORT = process.env.PORT || 3000;

// ---------------------------------------------- \\

// requiring handlebars 
var exphbs = require("express-handlebars");
// setting handlebars to use 'main' as basic HTML
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ---------------------------------------------- \\

// requiring routes to other HTML files
var routes = require("./controllers/moviesController.js");
// let server use routes
app.use(routes);

// ---------------------------------------------- \\

// wait for inputs on PORT
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});