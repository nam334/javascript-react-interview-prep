//Abstraction - hiding internal details and showing only essential features.

class Car {
  //public method
  startEngine() {
    console.log("Engine started");
    //calling private methods
    this.#injectFuel();
    this.#ignite();
  }

  //private methods
  #injectFuel() {
    console.log("Fuel injected");
  }

  #ignite() {
    console.log("Spark generated");
  }
}

const mycar = new Car();
mycar.startEngine();
//we cannot access private methods like injectFuel and ignite directly
