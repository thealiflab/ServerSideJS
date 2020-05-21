require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");

const app = express();


app.use(express.static("public"));  //To use local assets
app.use(bodyParser.urlencoded({extended: true}));

app.get("/nodeapp",function(req,res){
    res.sendFile(__dirname + "/form.html");
});

app.listen(function(){
    console.log("Server started....");
});

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'busihfkl_formmysqlwithnodejs'
});


app.post("/nodeapp",function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;
    var gender = req.body.gender;

    console.log(firstName,lastName,username,email,phone,gender);
    
    //res.send(req.body);
    
    var sql = "insert into usersinfo values('"+firstName+"', '"+lastName+"', '"+username+"','"+email+"', '"+phone+"', '"+gender+"')";
    
    
    connection.query(sql, function (err) {
        if (err){
            res.sendFile(__dirname + "/fail.html");
            console.log(err);
        }
        else{
            res.sendFile(__dirname + "/success.html");
        }
        
      });

    //connection.end();
    

});