var a = 1;

function test() {
  console.log(a); //undefined

  var a = 2;

  if (true) {
    let a = 3;
    var b = 4;
    console.log(a); //3
  }

  console.log(a, b); //a,4
  console.log(foo()); //foo

  function foo() {
    return "foo";
  }

  try {
    console.log(c);
  } catch (e) {
    console.log(e.name);
  }

  let c = 5;
}

test();
console.log(a); //1
