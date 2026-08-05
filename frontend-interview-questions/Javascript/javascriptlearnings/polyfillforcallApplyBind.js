let person = {
  firstname: "namrata",
  lastname: "das",
};
let greet = function (hometown, state, country) {
  console.log(
    `My name is ${this.firstname} ${this.lastname}. I'm from ${hometown}, ${state}, ${country}`,
  );
};

Function.prototype.mybind = function (...args) {
  let myfun = this;
  let params = args.slice(1);

  return function (...arg) {
    args[0].myfun = myfun;
    args[0].myfun(...params, ...arg);
    delete args[0].myfun;
  };
};
let mybind = greet.mybind(person, "Dib", "Assam");
mybind("India");

// Function.prototype.myApply = function (...args) {
//   args[0].myfun = this;
//   args[0].myfun(...args[1]);
//   delete args[0].myfun;
// };

// greet.myApply(person, ["Dibrugarh", "Assam"]);

// Function.prototype.myCall = function (...args) {
//   let mythis = this;
//   args[0].myfun = mythis;
//   args[0].myfun();
// };

// greet.myCall(person);
