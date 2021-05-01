const http = require('http');
const url = require("url");
const { parse } = require('querystring');

http.createServer((request, response) => {
    console.log('server work');
    if (request.method === 'GET') {
        let urlRequest = url.parse(request.url, true);
        console.log(urlRequest.query.test);
        if (urlRequest.query.test === "hello") {
            response.end('hello, world!')
        }
        else {
            response.end('not hello')
        }
    }
    else if (request.method === 'POST') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            response.end('ok');
        })
    }
}).listen(3000);