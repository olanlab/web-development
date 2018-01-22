var http = require('http');
var url = require('url');

http.createServer(function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.firstname + " " + q.lastname;
    resp.end(txt);
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");