const http = require('http');
const getUsers = require('./modules/users');

const server = http.createServer((request, response) => {

    const url = new URL(request.url, 'http://127.0.0.1:3003')
    const params = url.searchParams


    if (params.has('hello')) {
        if (params.get('hello')) {
            response.status = 200;
            response.statusMessage = "OK";
            response.header = "content-Type: text/plan"
            response.write(`Hello,${params.get('hello')}.`);
            response.end();
            return;
        } else {
            response.status = 400;
            response.header = "content-Type: text/plan"
            response.write(`Enter a name`);
            response.end();
            return;
        }

    } else if (request.url === '/users') {
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "content-Type: application/json"
        response.write(getUsers());
        response.end();

        return;
    } else if (request.url === '/'){
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "content-Type: text/plan"
        response.write("Hello, World!");
        response.end();
    } else {
        response.status = 500;
        response.header = "content-Type: text/plan"
        response.write("");
        response.end();
    }


});

server.listen(3003, () => {
    console.log('Сервер запущен по адресу http://127.0.0.1:3003')
})