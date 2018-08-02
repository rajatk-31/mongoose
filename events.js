var events = require('events');
var eventEmitter = new events.EventEmitter();



//Assign the event handler to an event:
eventEmitter.on('scream', () => {
    console.log("Screamed")
});

//Fire the 'scream' event:

eventEmitter.emit('scream');