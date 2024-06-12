const http = require('http');
const fs = require('fs');
const path = require('path')

const route = require('./routes.js');
const myEmitter = require('./logEvents.js');

global.DEBUG = true;

const server = http.createServer((request,response) => {
    if(DEBUG) console.log('Request URL:', request.url);
    let path = './views/';
    switch (request.url) {
        case '/':
            path += 'index.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('index file is working')
            // response.write(route.indexPage);
            // response.end('index page working');
            break;

        case '/about':
            path += 'about.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('about file is working')
            // response.write(route.aboutPage);
            // response.end('about page working');
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
            // response.write(route.contactPage);
            // response.end('contact page working');
            break
        case '/subscribe':
            path += 'subscribe.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('subscribe file is working')
            // response.write(route.subscribePage);
            // response.end('Subscribe page working');
            break;
        case '/products':
            path += 'products.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('products file is working')
            // response.write(route.productsPage);
            // response.end('products page working');
            break;
        case '/partnership':
            path += 'partnership.html';
            if(DEBUG) console.log(path);
            route.indexPage(path, response);
            myEmitter.emit('route', path);
            console.log('partnership file is working')
            // response.write(route.partnershipPage);
            // response.end('partnership page working');
            break;
            
    
        default:
            if(DEBUG) console.log('404 Not Found');
            myEmitter.emit('error', '404 Not Found');
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');
            break;
    }
});

server.listen(3000, () => {
    console.log('Server is running...');
  });