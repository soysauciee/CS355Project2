var mysql   = require('mysql');
var db  = require('./db_connection.js');


/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);


exports.getAll = function(callback) {
    var query = 'SELECT * FROM topics;';
    var query = ' Select * From categories;';



    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.insert = function(params, callback) {
    var query = 'INSERT INTO topics (topic_subject, topic_cat) VALUES (?, ?)';

    // the question marks in the sql query above will be replaced by the values of the
    // the data in queryData
    var queryData = [params.topic_subject, params.topic_cat];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};