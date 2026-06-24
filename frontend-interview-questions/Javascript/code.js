x = 10;

function outer() {
  console.log("1", x);

  {
    console.log("2", y);
    x = 5;
    var y = 20;
    {
      console.log("3", x);

      console.log("4", y);
      console.log("5", x);
    }
  }
  console.log("6", y);
}

outer();

//ref error
