var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);


exports.getAll = function(callback) {
    var query = 'SELECT * FROM categories;';


    connection.query(query, function(err, result) {
        callback(err, result);
    });
};



exports.delete = function(cat_id, callback) {
    var query = 'DELETE FROM categories WHERE cat_id = ?';
    var queryData = [cat_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};


