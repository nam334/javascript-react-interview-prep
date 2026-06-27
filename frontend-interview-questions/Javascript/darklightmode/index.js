const container = document.querySelector(".container");
const button = document.querySelector(".button");
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
