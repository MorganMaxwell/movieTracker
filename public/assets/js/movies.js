$(document).ready(function () {
    $(".change-watched").click(function () {
        var id = $(this).data("id");
        $.ajax("/api/movies/" + id, {
            type: "PUT",
        }).then(function (result) {
            console.log(result)
            location.reload();
        });
    });

    $(".addMovie").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val().trim();
        var rating = $("#rating").val().trim();
        console.log(name + rating);
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

    $(".deleteMovie").click(function () {
        var id = $(this).data("id");
        $.ajax("/api/movies/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload();
        });
    });
});