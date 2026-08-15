const container = document.querySelector(".container");
container.addEventListener("dblclick", (e) => {
  const circle = document.createElement("span");
  circle.classList.add("circle");
  container.appendChild(circle);

  const containerCoords = container.getBoundingClientRect();
  const circleCoords = circle.getBoundingClientRect();
  const circlesemiwidth = circleCoords.width / 2;

  circle.style.top = e.clientY - containerCoords.top - circlesemiwidth + `px`;
  circle.style.left = e.clientX - containerCoords.left - circlesemiwidth + `px`;
  circle.style.transform = "scale(0)";
  circle.style.opacity = 1;
  circle.style.transition = "transform 0.3s ease-in, opacity 0.6s ease-out";
  requestAnimationFrame(() => {
    circle.style.transform = "scale(1.3)";
    circle.style.opacity = 0;
  });
});

// animationend
// offset top / left/ clientX, innerWidth
