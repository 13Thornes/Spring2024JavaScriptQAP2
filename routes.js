// Project: JavaScript QAP 2
// Author: Samantha Thorne
// Date: June 10th-13th 2024


// Initalize required constants
const fs = require('fs');
const myEmitter = require('./logEvents.js');

// Fetch and read the files
function fetchFile(fileName, response) {
    fs.readFile(fileName, (error, content) => {
      if(error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('500 Internal Server Error');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content, 'utf-8');
      }
    });
  };

  // Functions for each view with emitters and fetchfile function
  function indexPage(path, response) {
    myEmitter.emit('event', path, 'INFO', 'The index page was requested')
    fetchFile(path, response)
  }

  function aboutPage(path, response) {
    myEmitter.emit('event', path, 'INFO', 'The about page was requested')
    fetchFile(path, response)
  }

  function homePage(path, response) {
    myEmitter.emit('event', path, 'INFO', 'The home page was requested')
    fetchFile(path, response)
  }

  function contactPage(path, response) {
    myEmitter.emit('event', path, 'INFO', 'The contact page was requested')
    fetchFile(path, response)
  }

  function productsPage(path, response) {
    myEmitter.emit('event', path, 'INFO', 'The products page was requested')
    fetchFile(path, response)
  }

  function subscribePage(path, response) {
    myEmitter.emit('event', path, 'INFO', 'The subscribe page was requested')
    fetchFile(path, response)
  }

  function partnershipPage(path, response) {
    myEmitter.emit('event', path, 'INFO', 'The partnership page was requested')
    fetchFile(path, response)
  }


  // Export modules
  module.exports = {
    indexPage,
    aboutPage,
    homePage,
    contactPage,
    subscribePage,
    productsPage,
    partnershipPage,
  }