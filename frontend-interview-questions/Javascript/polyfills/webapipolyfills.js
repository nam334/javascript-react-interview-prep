function dummysetTimeout() {
  console.log("Set timeout polyfill implemented");
}

function dummysetInterval() {
  console.log("Set interval polyfill implemented");
}
//polyfill of settimeout

// function mySetTimeout(cb, delay) {
//   let startTime = performance.now();
//   let timerobj = {};
//   function checkTime(currentTime) {
//     const elapsedTime = currentTime - startTime;
//     if (elapsedTime >= delay) cb();
//     else {
//       timerobj.timer = requestAnimationFrame(checkTime);
//     }
//   }
//   timerobj.timer = requestAnimationFrame(checkTime);
//   return timerobj;
// }

// let timerObj = mySetTimeout(dummysetTimeout, 2000);

//polyfill of cleartimeout

// function myClearTimeout(timerObj) {
//   cancelAnimationFrame(timerObj.timer);
// }

// setTimeout(() => {
//   console.log("Polyfill of clear timeout....");
//   myClearTimeout(timerObj);
// }, 6000);

//to chk if myClearTimeout is working -make the timer as 1000
//polyfill of setInterval

function mySetInterval(cb, delay) {
  let startTime = performance.now();
  let timerObj = {};
  function checkTime(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime >= delay) {
      cb();
      startTime = currentTime;
      timerObj.timer = requestAnimationFrame(checkTime);
    } else {
      timerObj.timer = requestAnimationFrame(checkTime);
    }
  }
  timerObj.timer = requestAnimationFrame(checkTime);
  return timerObj;
}

let timerobj = mySetInterval(dummysetInterval, 2000);

function myClearInterval(timerobj) {
  cancelAnimationFrame(timerobj.timer);
}

setTimeout(() => {
  console.log("Polyfill of clearInterval");
  myClearInterval(timerobj);
}, 5500);
