// Project: JavaScript QAP 2
// Author: Samantha Thorne
// Date: June 10th-13th 2024

// Initialize required constants
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const { format, getDay} = require('date-fns');
const { v4: uuid } = require('uuid');

// Create event emitter

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();


/// This event is keeping track of all route events and console logs + logs the event
myEmitter.on('route', (url) => {
    const d = new Date();
    if(DEBUG) console.log(`Route Event on: ${url} at ${d}`);
    if(!fs.existsSync(path.join(__dirname, 'logs'))) {
        fs.mkdirSync(path.join(__dirname, 'logs'));
    }
    fs.appendFile(path.join(__dirname, 'logs', 'route.log'), `Route Event on: ${url} at ${d}`, (err) => {
        if(err) throw err;
    });

});


// This event both console logs and logs if an error occurs
myEmitter.on('error', (message) => {
    const d = new Date();
    if(DEBUG) console.log(`Error: ${message} at ${d}`);
    if(!fs.existsSync(path.join(__dirname, 'logs'))) {
        fs.mkdirSync(path.join(__dirname, 'logs'));
    }
    fs.appendFile(path.join(__dirname, 'logs', 'route.log'), `Error: ${message} at ${d}`, (err) => {
        if(err) throw err;
    });
});


// This event creates a directory log, logs an event that happens and console logs out when a file read is successful or unsuccessful
myEmitter.on('event', async (event, level, message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${level}\t${event}\t${message}\t${uuid()}`;
    try {
        
        const currFolder = 'logs/' + getDay(new Date());
        if(!fs.existsSync(path.join(__dirname, 'logs/'))) {
            // if the parent directory logs/ doesn't exist, create it
            await fsPromises.mkdir(path.join(__dirname, 'logs/'));
            if(!fs.existsSync(path.join(__dirname, currFolder))) {
                // create the directory for the year ./logs/yyyy
                await fsPromises.mkdir(path.join(__dirname, currFolder));
            }
        }
        else {
            if(!fs.existsSync(path.join(__dirname, currFolder))) {
                // create the directory for the year ./logs/yyyy
                await fsPromises.mkdir(path.join(__dirname, currFolder));
            }
        }
        
        if(DEBUG) console.log(logItem);
        const fileName = `${format(new Date(), 'yyyyMMdd')}` + '_http_events.log';
        await fsPromises.appendFile(path.join(__dirname, currFolder, fileName), logItem + '\n');
        console.log(`File read successfully`)
    } catch (err) {
        console.log(err);
        console.log(`File unavailable`)

    };
  }); 


  // Export module
module.exports = myEmitter
