var http=require("http");
http.createServer(function(req,res){
    if(req.url==='/' && req.methord==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Welcome to my page</h1>');
    }

    else if(req.url==='/about' && req.methord==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>About Us</h1>');
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end();
    }
}).listen(8080);

console.log("Server is running at localhost:8080");
