const grandParent = document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked");
  },
  true,
);
const parent = document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  false,
);
const child = document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Childclicked");
  },
  true,
);
