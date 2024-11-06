var http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type' : 'text/plain'
    });
    res.end('Hello')
}).listen(3000);

console.log('Server running on 3000')