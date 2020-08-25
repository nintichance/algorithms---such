class EventEmitter {
  constructor() {
    this.events = {}
  }
  
  on(name, callback, isOnce = false) {
    if (!this.events[name]) {
      this.events[name] = []
    }
    this.events[name].push({callback, isOnce})
  }
  
  off(name, callback) {
    const index =  this.events[name].indexOf(callback)
    this.events[name].splice(index, 1)
  }
  
  emit(name, msg) {
    this.events[name].forEach(({callback, isOnce})=>{
      callback(msg)
      if (isOnce) this.off(name, callback)
    })
  }
  
  once(name, callback) {
    this.on(name, callback, true)
  }
}

const eventEmitter = new EventEmitter()

function responseToEvent(msg) {
    console.log(msg);
}

eventEmitter.on('pramp', responseToEvent); // addEventListener
eventEmitter.once('pramp', function(msg) { console.log(msg + ' just once!'); }); // call a callback once an event is fired  one time
eventEmitter.emit('pramp', '1st');// call all the callbacks resulting from the events
eventEmitter.emit('pramp', '2nd');
eventEmitter.off('pramp', responseToEvent); // removeEventListener
eventEmitter.emit('pramp', '3rd');
eventEmitter.emit('pramp', '1st');