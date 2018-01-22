var http = require("http");
var url = require('url');

http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World Ok.\n");
})
.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");