let bgimage = document.getElementById("bgImage");
let loaderText = document.getElementById("loader");
let blurCount = 100;
let loaderCount = 0;
bgimage.style.filter = `blur(${100}px)`;
loaderText.innerHTML = 0;

function reduceBlur(val) {
  return val - 1;
}

function increaseCount(count) {
  return count + 1;
}

let timer = setInterval(() => {
  if (blurCount > 0) {
    blurCount = reduceBlur(blurCount);
    bgimage.style.filter = `blur(${blurCount}px)`;

    //for loader
    loaderCount = increaseCount(loaderCount);
    loaderText.innerHTML = loaderCount;
  } else clearInterval(timer);
}, 100);
