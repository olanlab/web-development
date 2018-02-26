var http = require("http");


http.createServer((req, resp) => {
    // http://127.0.0.1:8081/home.html
    // http://127.0.0.1:8081/about.html
    
    // ./home.html, ./about.html

    // error | 404.html
    
})
.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");