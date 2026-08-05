let name = {
  firstname: "Namrata",
  lastname: "Das",
};

let printFullName = (hometown, state) => {
  console.log("this is", this);
  console.log(
    `I'm ${this.firstname} ${this.lastname}. I'm from ${hometown}, ${state}`,
  );
};

printFullName.call(name, "Dibrugarh", "Assam");

// let name2 = {
//   firstname: "Titu",
//   lastname: "Das",
// };

// printFullName.apply(name2, ["Dibrugarh", "Assam"]);
//function borrowing - we can borrow methods from other objects
//and use it as needed

// name.printFullName.call(name2);
// name2.printFullName();

//bind - similar to call method but instead of directly calling the method
//ir returns a copy of the mthod so that it can be called later

// let printFullName2 = printFullName.bind(name2, "Mumbai", "Maharashtra");
// printFullName2();
