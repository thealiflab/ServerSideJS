var http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res) {
    
    var form = __dirname + "/form.html";
    
    fs.access(form,fs.constants.F_OK, err => {
        //check file
        console.log(`${form} ${err ? "HTML file does not exist" : "File Exist"}`);
    });
    
    fs.readFile(form, function(err,content){
        if(err){
            res.writeHead(404,{"Content-type": "text/html"});
            res.end("<h1>No such HTML file</h1>");
        }
        else{
            res.writeHead(200,{"Content-type":"text/html"});
            res.end(content);
        }
    });
    
    
});
server.listen(function(){
    console.log(__dirname);
});

