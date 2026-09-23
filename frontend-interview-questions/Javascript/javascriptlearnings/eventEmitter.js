// Event Emitter

// An Event Emitter is a design pattern that allows different parts of an application to communicate using events.
// An Event Emitter allows one part of an application to announce that something happened,
// while other parts can independently respond to it.
// It mainly follows three steps:

// Subscribe → Emit → Unsubscribe
// Event: A named action that represents something happening, such as "productAdded".
// Listener: A callback function that waits for an event.
// on() / subscribe(): Registers a listener for an event.
// emit(): Triggers an event and executes all its registered listeners.
// off() / unsubscribe(): Removes a listener from an event.
// once(): Registers a listener that executes only once.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    //If the event does not exist, create an empty array.
    if (!this.events[eventName]) this.events[eventName] = [];

    //Add the listener to that array.
    this.events[eventName].push(listener);
  }

  emit(eventName, data) {
    const listeners = this.events[eventName];

    if (!listeners) return;

    listeners.forEach((listener) => listener(data));
  }

  off(eventName, listenerToRemove) {
    //remove the listener from the events array
    const listeners = this.events[eventName];
    if (!listeners) return;

    this.events[eventName] = listeners.filter(
      (listener) => listener !== listenerToRemove,
    );

    //remove the listener if the event does not have any listeners
    if (this.events[eventName].length === 0) delete this.events[eventName];
  }

  //once - registers a listener that should execute only the first time an event is emitted
  once(eventName, listener) {
    const wrapper = (data) => {
      listener(data);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}

function updateCartCount() {
  console.log("Cart count updated");
}

function showNotifications(productname) {
  console.log(`${productname} added successfully`);
}

//to chk once
function showWelcomeStatus(username) {
  console.log(`Welcome ${username}`);
}
const emitter = new EventEmitter();

emitter.once("userLoggedIn", showWelcomeStatus);
emitter.emit("userLoggedIn", "Namrata");

emitter.on("productAdded", updateCartCount);
emitter.on("productAdded", showNotifications);
console.log("Initially", emitter.events);

emitter.emit("productAdded", "Laptop");

emitter.off("productAdded", showNotifications);
console.log("After removal", emitter.events);
