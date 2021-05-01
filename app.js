const http = require('http');
const url = require("url");

http.createServer((request, response) => {
    console.log('server work');
    let urlRequest = url.parse(request.url, true);
    console.log(urlRequest.query.test);
    if (urlRequest.query.test === "hello") {
        response.end('hello, world!')
    }
    else {
        response.end('not hello')
    }
}).listen(3000);