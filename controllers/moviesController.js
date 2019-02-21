var express = require("express");

var router = express.Router();


var movie = require("../models/movie.js");
// display database information to the screen
router.get("/", function (req, res) {
    movie.all(function (data) {
        var handleBarsObject = {
            movies: data
        };
        res.render("index", handleBarsObject);
    });
});
// put a new movie + rating into the database, and update the screen
router.post("/api/newmovie", function (req, res) {
    movie.new(
        req.body.name,
        req.body.rating,
        function (result) {
            res.json({ id: result.insertId });
        });
});
// update a movie to the watched column
router.put("/api/movies/:id", function (req, res) {
    var editPoint = req.params.id;

    movie.watched(editPoint, function (result) {
        res.end();
    });
});
// delete a movie from database
router.delete("/api/movies/:id", function (req, res) {
    var deletePoint = req.params.id;

    movie.delete(deletePoint, function (result) {
        res.end();
    });
});

module.exports = router;