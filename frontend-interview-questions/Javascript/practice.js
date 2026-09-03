const obj = {
  name: "namrata",
};

function printName(name) {
  console.log(this);
  console.log(`My name is ${this.name}`);
}

const obj2 = {
  name: "Priya",
};

Function.prototype.myCall = function (obj) {
  console.log(this, obj);
  let mythis = this;

  obj.myfun = mythis;
  obj.myfun();
  delete obj.myfun;
};

printName.myCall(obj2);
