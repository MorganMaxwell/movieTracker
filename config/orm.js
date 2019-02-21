const connection = require("./connection.js");

var orm = {
    // generic method to get all columns from database
    selectall: function (tableInput, callback) {
        connection.query(
            "SELECT * FROM " + tableInput + ";",
            function (err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    },
    // equivalent to a post, just creating a new row of data
    insertOne: function (tableInput, col1, col2, userInput1, userInput2, callback) {
        connection.query(
            "INSERT INTO ?? (??,??) VALUES (?,?)",
            [tableInput, col1, col2, userInput1, userInput2],
            function (err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    },
    // equivalent to a put, editing an existing row of data
    updateOne: function (tableInput, columns, value, id, callback) {
        connection.query(
            "UPDATE ?? SET ?? = ? WHERE id = ?;",
            [tableInput, columns, value, id],
            function (err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    },
    // ... delete.... that's it.
    deleteOne: function(tableInput, id, callback) {
        connection.query(
            "DELETE FROM ?? WHERE id = ?;",
            [tableInput, id],
            function(err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    }
};
// exporting to use up the chain e.g. movie.js
module.exports = orm;