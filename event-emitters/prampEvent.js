//https://css-tricks.com/understanding-event-emitters/#:~:text=An%20event%20emitter%20is%20a,sub”%20model%2C%20or%20listener.
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
  
  once(name, callback) {
    this.on(name, callback, true)
  }
  
  emit(name, ...args) {
    this.events[name].forEach(({callback, isOnce}) =>{
      callback(...args)
      if (isOnce) this.off(name, callback)
    })    
  }
  
  off(name, callback) {
    const index = this.events[name].indexOf(callback)
    this.events[name].splice(index, 1)
  }
}

function responseToEvent(msg) {
    console.log(msg);
}

eventEmitter = new EventEmitter
eventEmitter.on('pramp', responseToEvent);
eventEmitter.once('pramp', function(msg) { console.log(msg + ' just once!'); });
eventEmitter.emit('pramp', '1st');
eventEmitter.emit('pramp', '2nd');
eventEmitter.off('pramp', responseToEvent);
eventEmitter.emit('pramp', '3rd');
eventEmitter.emit('pramp', '1st');
