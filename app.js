//Using express

const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"));  //To use local assets
app.use(bodyParser.urlencoded({extended: true}));

////For server only
// app.get("/nodeapp",function(req,res){
//     res.sendFile(__dirname + "/form.html");
// });

////For local only
app.get("/",function(req,res){
    res.sendFile(__dirname + "/form.html");
});

////For server only
// app.listen(function(){
//     console.log("Server started....");
// });

//For local only
app.listen(3000,function(){
    console.log("Server started....");
});


////For server only
// app.post("/nodeapp",function(req,res){
//     var firstName = req.body.firstName;
//     var lastName = req.body.lastName;
//     var username = req.body.username;
//     var email = req.body.email;
//     var phone = req.body.phone;
//     var gender = req.body.gender;

//     console.log(firstName,lastName,username,email,phone,gender);

//     //connection.end();
//     res.sendFile(__dirname + "/success.html");

// });

//For local only
app.post("/",function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;
    var gender = req.body.gender;

    console.log(firstName,lastName,username,email,phone,gender);

    //connection.end();
    res.sendFile(__dirname + "/success.html");

});

