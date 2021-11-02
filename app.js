const mysql = require("mysql");

var con = mysql.createConnection({
    host:"localhost",
    user:"mwbauer",
    password:"FortSpiral1415!",
    database:"Leaguer"

});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var id  = 2;
    var first_name  = "'Max'";
    var last_name = "'Bauer'";

    var sql = "INSERT INTO Users (id, first_name, last_name, email, phone_number) Values (" +id + ", "  + first_name  + ", " + last_name + " ,'mwbauer@ucsc.edu', 5178021485)";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log('items inserted');
    });
});