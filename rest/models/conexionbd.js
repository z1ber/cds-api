'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'b3642c0a7d88bb',
    password : 'ba157c25',
    database : 'horario_cds'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
