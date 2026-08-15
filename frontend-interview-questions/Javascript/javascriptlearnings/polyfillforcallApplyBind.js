let person = {
  firstname: "namrata",
  lastname: "das",
};
let greet = function (hometown, state, country = "India") {
  console.log(
    `My name is ${this.firstname} ${this.lastname}. I'm from ${hometown}, ${state}, ${country}`,
  );
};

// Function.prototype.mybind = function (...args) {
//   let myfun = this;
//   //first arg is this value
//   let params = args.slice(1);
//   //params = ["Dib", "Assam"]
//   return function (...arg) {
//     args[0].myfun = myfun;
//     args[0].myfun(...params, ...arg);
//     delete args[0].myfun;
//   };
// };
// let mybind = greet.mybind(person, "Dib", "Assam");
// mybind("India");

Function.prototype.myApply = function () {
  console.log(arguments);
  arguments[0].myfun = this;
  arguments[0].myfun(...arguments[1]);
  delete arguments[0].myfun;
};

greet.myApply(person, ["Dibrugarh", "Assam"]);

// Function.prototype.myCall = function (...args) {
//   let mythis = this;
//   const params = args.slice(1);
//   args[0].myfun = mythis;
//   args[0].myfun(...params);
// };

// greet.myCall(person, "Dib", "Assam");
