'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'zd3zf9lvldthj1e5',
    password : 'be4t7h6i3zitpa13',
    database : 'ekvzet0m6f3ls5hn'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
