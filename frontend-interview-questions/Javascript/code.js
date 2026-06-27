function outer() {
  debugger;
  if (true) {
    debugger;
    let a = 30;
  }
  b = 40;
  console.log("4", a, b);
}

outer();
