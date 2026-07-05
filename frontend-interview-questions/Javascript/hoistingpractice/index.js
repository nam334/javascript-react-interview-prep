// class AClass {
//   constructor() {}
//   method1() {}
//   method2() {}
//   method3() {}
// }

// const a = new AClass();
// console.log(a);

// //constructor resonates the properties that will be present in the object
// //created from the instance of the class
// class Car {
//   constructor(model) {
//     this.model = model;
//   }
//   printModel() {
//     console.log(this.model);
//   }

//   //this refers to the object on which we are calling the method
//   printThis() {
//     console.log("this is", this);
//   }
// }

// const BMW = new Car("BMW");
// const Audi = new Car("AUDI");
// BMW.printModel();
// Audi.printThis();

// console.log("type of class Car is", typeof Car);

// //named class
// const Employee = class {
//   welcome() {
//     console.log("Hello Employee");
//   }
// };
// const developer = new Employee();
// developer.welcome();

// //class fields

// class Phone {
//   brand = "Apple";
//   make() {
//     console.log(this.brand);
//   }
// }

// const mob = new Phone();
// mob.make();

// //Getters and Setters

// //they are methods through which we can get value of a property
// //and set the value of a property

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     //set validations
//     if (!value) {
//       console.warn("A name is mandatory");
//       return;
//     }
//     this._name = value;
//   }
// }

// // const animal = new Animal("");
// // console.log(animal.name);
// // console.log(animal.get);

// //Static Properties

// // static - opposite of dynamic
// // dynamic - instances of class that we create dynamically
// // utility methods- reusable functionalities create oncuechange, reuse everywhere

// class MyClass {
//   static staticMethod() {
//     console.log(this);
//   }
// }

// //to access static method we dont have to create instance
// //of my class

// MyClass.staticMethod();
// //IMP - For static method this points to the class itself

// //example of static method in class
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   static isValidEmail(email) {
//     return email.includes("@");
//   }
// }

// const user1 = new User("namrata", "namratadas334@gmail.com");
// console.log(
//   "static method email check",
//   User.isValidEmail("namratadas334gmail.com"),
// );

// //private and public
// //public - fields and methods accessible from anywhere
// //private - accessible only from inside o the class  (eg abstraction, encapsulation)

// class WashingMachine {
//   //public field
//   brand;

//   //private field
//   #powerStstus = false;

//   constructor(brand) {
//     this.brand = brand;
//   }

//   start() {
//     //spin

//     this.#spin();
//     //drain

//     //stop
//   }

//   stop() {
//     //turn off
//   }

//   //private method is declared with #

//   #turnOn() {}

//   #turnOff() {}
// }

// //encapsulation, inheritance, polymorphism, abstraction
// class Human {
//   //public field
//   species = "Homo Sapiens";
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //public method
//   introduce() {
//     console.log(`Hi, this is ${this.name}`);
//   }
// }

// //inheritance
// class Student extends Human {
//   constructor(name, age, grade) {
//     //super calls constructor function of parent
//     super(name, age);
//     this.grade = grade;
//   }

//   //public method
//   study() {
//     console.log(`${this.name} is studying`);
//   }

//   //polymorphism - override the method introduce
//   introduce() {
//     console.log(
//       `Hi, my name is ${this.name} and I study in grade ${this.grade}`,
//     );
//   }
// }

// Function Constructor
function Car(model, color, year, owner) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.wheelNumber = function () {
    return 4;
  };
}
