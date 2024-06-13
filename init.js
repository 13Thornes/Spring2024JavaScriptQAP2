// Project: JavaScript QAP 2
// Author: Samantha Thorne
// Date: June 10th-13th 2024


// Initialize constants
const http = require('http');
const path = require('path')

const route = require('./routes.js');
const myEmitter = require('./logEvents.js');

// Debug statement
global.DEBUG = true;

// Create server
const server = http.createServer((request,response) => {
    if(DEBUG) console.log('Request URL:', request.url);
    let path = './views/';
    // Switch statement based on url
    switch (request.url) {
        case '/':
            path += 'index.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('index file is working')
            break;

        case '/about':
            path += 'about.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('about file is working')
            break;

        case '/home':
            path += 'home.html';
            if(DEBUG) console.log(path);
            route.homePage(path, response);
            myEmitter.emit('route', path);
            console.log('home file is working')
            break

        case '/contact':
            path += 'contact.html';
            if(DEBUG) console.log(path);
            route.contactPage(path, response);
            myEmitter.emit('route', path);
            console.log('contact file is working')
            break

        case '/subscribe':
            path += 'subscribe.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('subscribe file is working')
            break

        case '/products':
            path += 'products.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('products file is working')
            break;

        case '/partnership':
            path += 'partnership.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('partnership file is working')
            break;
            
    
        default:
            if(DEBUG) console.log('404 Not Found');
            myEmitter.emit('error', '404 Not Found');
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');
            break;
    }
});

// Make sure the server is running
server.listen(3000, () => {
    console.log('Server is running...');
  });