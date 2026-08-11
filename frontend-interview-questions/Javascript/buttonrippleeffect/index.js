const item = document.querySelector(".item");
item.addEventListener("click", (e) => {
  const coOrdinates = item.getBoundingClientRect();
  const circle = document.createElement("span");

  circle.classList.add("circle");
  item.appendChild(circle);

  const xcoOrdinates = Number(e.clientX) - Number(coOrdinates.left);
  const ycoOrdinates = Number(e.clientY) - Number(coOrdinates.top);
  circle.style.top = `${ycoOrdinates}px`;
  circle.style.left = `${xcoOrdinates}px`;
  console.log(xcoOrdinates, ycoOrdinates);
  const widthOfCircle = circle.getBoundingClientRect().width;
  const semiwidth = widthOfCircle / 2;
  circle.style.top = ycoOrdinates - semiwidth + `px`;
  circle.style.left = xcoOrdinates - semiwidth + `px`;
  circle.style.transform = "scale(0)";
  circle.style.opacity = 1;
  circle.style.transition = "transform 0.4s ease-in, opacity 0.4s ease-in";

  requestAnimationFrame(() => {
    circle.style.transform = "scale(1)";
    circle.style.opacity = 0;
  });
  // setTimeout(() => {
  //   circle.style.transform = "scale(1)";
  //   circle.style.opacity = 0;
  // }, 10);
});
