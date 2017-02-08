var express = require('express');
var mysql = require('mysql');
var app = express();
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',//password for mysql database.
  database: 'students'


});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
  }
  else {
    console.log('Connection established');
  }

});

app.get('/',function(req,resp){

//sql stuff
con.query("SELECT * FROM student",function(error ,rows, fields){
if (error) {console.log('Error in query');}
else {console.log('Successful query'); console.log(rows);}
 });
});
app.listen(1337);
