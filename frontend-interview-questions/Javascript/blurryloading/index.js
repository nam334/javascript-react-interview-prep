// transition - property-name | duration | easing-function
// A transition answers only one question:
// "If a CSS property changes, should it change instantly or smoothly?"

let bgimage = document.getElementById("bgImage");
let loaderText = document.getElementById("loader");
let blurCount = 100;
let loaderCount = 0;

//bgimage.style.transition = `filter ${0.3}s ease-in`;
bgimage.style.filter = `blur(${100}px)`;
loaderText.innerHTML = 0;

//loaderText.style.transform = `scale(1.1)`;
loaderText.style.transform = `scale(1.1)`;

loaderText.style.transition = `transform ${0.05}s ease-in`;
// setTimeout(() => {
//   loaderText.style.transform = `scale(1)`;
// }, 50);

// textcontent
function reduceBlur(val) {
  return val - 1;
}

function increaseCount(count) {
  return count + 1;
}

let timer = setInterval(() => {
  if (blurCount > 0) {
    blurCount = reduceBlur(blurCount);
    bgimage.style.transition = `filter ${0.05}s ease-in`;
    bgimage.style.filter = `blur(${blurCount}px)`;

    //for loader
    loaderCount = increaseCount(loaderCount);
    loaderText.innerHTML = loaderCount;
  } else clearInterval(timer);
}, 100);
