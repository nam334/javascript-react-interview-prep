function foo() {
  let a = 10;
  let b = 20;
  if (false) {
    //var a = 30;
    let b = 40;
    console.log("1-a,b", a, b);
  }
  console.log("2-a,b", a, b);
}
foo();

// {
//   a - unavaialble;
// }
// b - undefimed;
// a - undefined;
