const http = require('http');
const fs = require('fs');
const path = require('path')

global.DEBUG = true;

const server = http.createServer((request,response) => {
    if(DEBUG) console.log('Request URL:', request.url);
    switch (request.url) {
        case '/':
            console.log('Index page running')
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('This is the index page');
            break;
        case '/about':
            console.log('About page running')
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('This is the about page');
            break;
        case '/contact':
            console.log('Contact page running')
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('This is the contact page');
            break;
        case '/subscribe':
            console.log('Subcribe page running')
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('This is the subscribe page');
            break;
        case '/products':
            console.log('Product page running')
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('This is the products page');
            break;
        case '/partnership':
            console.log('Partnership page running')
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('This is the partnership page');
            break;
    
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');
            break;
    }

})

server.listen(3050, () => {
    console.log('Server is running...');
  });