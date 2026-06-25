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

  accordianDiv.addEventListener("click", () => {
    let openAccordian = document.querySelector(".visible");
    if (accordianContent.classList.contains("visible"))
      accordianContent.classList.replace("visible", "hidden");
    else if (accordianContent.classList.contains("hidden")) {
      if (openAccordian) openAccordian.classList.replace("visible", "hidden");
      accordianContent.classList.replace("hidden", "visible");
    }
  });
});

let expandAll = document.getElementById("expandAll");
let collapseAll = document.getElementById("collapseAll");
const accordianContent = document.querySelectorAll(".accordianContent");
console.log(accordianContent);
expandAll.addEventListener("click", () => {
  accordianContent.forEach((content, index) =>
    content.classList.replace("hidden", "visible"),
  );
});
collapseAll.addEventListener("click", () => {
  accordianContent.forEach((content, index) =>
    content.classList.replace("visible", "hidden"),
  );
});
