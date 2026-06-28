const container = document.querySelector(".container");
const button = document.querySelector(".button");
const toggleswitch = document.querySelector(".switch");
const toggle = document.querySelector(".toggle");

button.addEventListener("click", () => {
  console.log(button.innerText);
  if (button.innerText === "Light") {
    container.classList.replace("light", "dark");
    button.classList.replace("lightbtn", "darkbtn");
    button.innerText = "Dark";
  } else if (button.innerText === "Dark") {
    container.classList.replace("dark", "light");
    button.classList.replace("lightbtn", "darkbtn");
    button.innerText = "Light";
  }
});

toggleswitch.addEventListener("click", () => {
  if (toggleswitch.classList.contains("left")) {
    container.classList.replace("light", "dark");
    toggleswitch.classList.replace("left", "right");
  } else if (toggleswitch.classList.contains("right")) {
    container.classList.replace("dark", "light");
    toggleswitch.classList.replace("right", "left");
  }
});
