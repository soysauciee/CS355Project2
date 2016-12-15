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


exports.insert = function(params, callback) {
    var query = 'INSERT INTO categories (cat_name, cat_description ) VALUES (?, ?)';

    // the question marks in the sql query above will be replaced by the values of the
    // the data in queryData
    var queryData = [params.cat_name, params.cat_description];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });


};


exports.getById = function(topic_id, callback ) {
    var query = 'SELECT * FROM topics WHERE topic_id = ?';
    var queryData = [topic_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


