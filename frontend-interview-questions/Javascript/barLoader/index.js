let loader = document.getElementById("loader");
let loaderwidth = 1;
loader.style.width = `${loaderwidth}vw`;
let timer = setInterval(() => {
  if (loaderwidth <= 100) {
    loaderwidth++;
    loader.style.width = `${loaderwidth}vw`;
  } else {
    clearInterval(timer);
  }
}, 100);
