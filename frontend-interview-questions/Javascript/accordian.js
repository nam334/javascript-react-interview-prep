const accordiandata = [
  {
    id: 1,
    title: "What is Closure in JavaScript?",
    content:
      "A closure allows a function to access variables from its outer scope even after the outer function has returned.",
  },
  {
    id: 2,
    title: "What is Hoisting?",
    content:
      "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.",
  },
  {
    id: 3,
    title: "What is useMemo?",
    content:
      "useMemo memoizes a computed value and recalculates it only when dependencies change.",
  },
];

const accordianContainer = document.getElementById("accordian-container");

accordiandata.map((accordiandata, index) => {
  const accordianDiv = document.createElement("div");
  accordianDiv.classList.add("accordianDiv");
  accordianDiv.innerHTML = `
    <p class="accordianTitle">${accordiandata.title}</p>
    <p class="accordianContent">${accordiandata.content}</p>
    `;

  accordianContainer.appendChild(accordianDiv);
  const accordianTitle = accordianDiv.querySelector(".accordianTitle");
  const accordianContent = accordianDiv.querySelector(".accordianContent");

  accordianContent.classList.add("hidden");
  console.log(accordianTitle.textContent);
  accordianDiv.addEventListener("click", () => {
    if (accordianContent.classList.contains("hidden"))
      accordianContent.classList.replace("hidden", "visible");
    else if (accordianContent.classList.contains("visible"))
      accordianContent.classList.replace("visible", "hidden");
  });
});
