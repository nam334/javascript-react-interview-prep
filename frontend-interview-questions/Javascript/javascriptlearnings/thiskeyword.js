// "use strict";
//this in global space

// this in global space is the globalobject i.e it depends on the environment in which js is running
// browser - window
// node - global etc

//this inside a function
// "use strict"; - this is strict mode

// function abc() {
//   console.log(this);
//   //   this depends on strict mode
//   //   in strict mode - this is undefined
//   //   in non strict mode - this points to window
// }

// abc();
// window.abc();
// if anytime value of this is undefined or null, this will be replaced with globalobject
// ONLY in non strict mode

// this inside non strict mode - (this substitution)

//this inside an object
// const obj = {
//   a: 10,
//   x: function () {
//     console.log("this inside object", this);
//   },
// };

// obj.x();
// this inside the method of an object points to the object which is calling it

//this inside arrow function
//this inside arrow function will behave like its enclosing lexical context
// lexical means how it is written inside the code

//to identify this in arrow functions -
//first find out enclosing lexical context
//find out this of the enclosing lexical context

// const obj2 = {
//   x: function () {
//     const y = () => {
//       console.log(this);
//     };
//     y();
//   },
// };

// obj2.x();

//this keyword in DOM
// this inside DOM element - refers to HTMLelement

//this inside class, constructor
