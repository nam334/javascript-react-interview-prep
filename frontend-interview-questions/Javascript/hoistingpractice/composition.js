// Composition -use of other class to build functionality

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  startCar() {
    this.engine.start();
  }
}
