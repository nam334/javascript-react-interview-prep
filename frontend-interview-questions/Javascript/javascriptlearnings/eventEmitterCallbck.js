class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    //if eventName does not exist we create an array containing callback
    if (!this.events[eventName]) this.events[eventName] = [];
    //if it already exists, we add callback to the existing array
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return;
    const listeners = this.events[eventName];
    listeners.forEach((callback) => callback(...args));
  }

  off(eventName, callback) {
    const listeners = this.events[eventName];
    if (!listeners) return;
    this.events[eventName] = listeners.filter(
      (listener) => listener !== callback,
    );
  }

  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}
