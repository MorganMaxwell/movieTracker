const connection = require("./connection.js");
// basic functions for controller to use to 
// send to the databse
// SELECT * FROM
// INSERT INTO
// UPDATE

var orm = {
    selectall: function (tableInput, callback) {
        connection.query(
            "SELECT * FROM " + tableInput + ";",
            function (err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    },
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

module.exports = orm;