const obj = {
  name: "Namrata",
};

function printName(place, country) {
  console.log(`My name is ${this.name}. I'm from ${place}, ${country}.`);
}

const obj2 = {
  name: "Priya",
};

//write the apply polyfill

// Function.prototype.myApply = function () {
//   const arr = [...arguments];
//   const obj = arr.shift(); //obj
//   const functionArgs = arr[0];
//   obj.myfun = this;
//   const result = obj.myfun(...functionArgs);
//   delete obj.myfun;
//   return result;
// };

// printName.myApply(obj2, ["Dibrugarh", "India"]);

//bindpolyfill

Function.prototype.myBind = function () {
  let arr = [...arguments];

  let obj = arr.shift();
  const functionArgs = arr;

  obj.myfun = this;

  return function (...args) {
    const result = obj.myfun(...functionArgs, ...args);

    return result;
  };
};
const withbind = printName.myBind(obj, "Dib", "Assam");
withbind();
