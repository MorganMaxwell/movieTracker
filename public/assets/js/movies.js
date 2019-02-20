$(document).ready(function () {
    // put movie in watched column
    $(".change-watched").click(function () {
        var id = $(this).data("id");

        $.ajax("/api/movies/" + id, {
            type: "PUT",
        }).then(function () {
            location.reload();
        });
    });
    // add a new movie
    $(".addMovie").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val().trim();
        var rating = $("#rating").val().trim();
        var newMovie = {
            name: name,
            rating: rating
        };

        $.ajax("/api/newmovie", {
            type: "POST",
            data: newMovie
        }).then(function () {
            location.reload();
        });
    });
    // delete movie from list
    $(".deleteMovie").click(function () {
        var id = $(this).data("id");

        $.ajax("/api/movies/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload();
        });
    });
});