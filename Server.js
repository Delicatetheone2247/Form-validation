
let http = require('http');
let https = require('https');
let fs = require('fs');

//404 response
function send404Response(response){
  response.writeHead(404, {"Content-Type": "text/plain"});
 response.write("Error 404: Page not found!");
  response.end();
}

//Handle a user request
function onRequest (request, response){

  if( request.method == 'GET' && request.url == '/'){
      response.writeHead(200, {"Content-Type": "text/html"});
      fs.createReadStream("./index.html","validation.html").pipe(response);

  } else if (request.method == 'GET' && request.url == '/styles.css'){
      response.writeHead(200, {"Content-Type": "text/css"});
      fs.createReadStream('./styles.css').pipe(response);

  } else if (request.method == 'GET' && request.url == '/Javascript.js') {
      response.writeHead(200, {"Content-Type": "application/javascript"});
      fs.createReadStream('./Javascript.js').pipe(response);
  }else
  {
   send404Response(response);
  }
}


 //Starting  a server on  port
http.createServer(onRequest).listen(8080);
console.log ("server is running")


