// requiring methods to use
var orm = require("../config/orm.js");
// using orm to run functions with project specific info
var movie = {
    // grab everything to display
    all: function(callback) {
        orm.selectall("movies", callback);
    },
    // make a new entry
    new: function(userInput1, userInput2, callback) {
        orm.insertOne("movies", "movie_name", "rating", userInput1, userInput2, callback);
    },
    // update a movie to go into the watched column
    watched: function(id, callback) {
        orm.updateOne("movies", "watched", true, id, callback);
    },
    // delete a movie from the list
    delete: function(id, callback) {
        orm.deleteOne("movies", id, callback);
    }
};

module.exports = movie;