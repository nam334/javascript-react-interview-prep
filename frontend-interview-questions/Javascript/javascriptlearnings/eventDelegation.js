// const parentDiv = document
//   .querySelector("#parentDiv")
//   .addEventListener("click", (e) => {
//     console.log("clicked on parentDiv", e.target.id, e.target.tagName);
//     if (e.target.tagName === "LI") {
//       window.location.href = "/" + e.target.id;
//     }
//   });

const user = {
  username: "Namrata",
};

function regular() {
  console.log(this.username);
}

const arrow = () => {
  console.log(this.username);
};

regular.call(user);
arrow.call(user);
