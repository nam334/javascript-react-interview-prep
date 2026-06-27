let expandingcardsimage = document.querySelectorAll(".expandingcardsimage");
let expandingcardsdiv = document.querySelector(".expandingcardsdiv");
expandingcardsimage.forEach((cardsimage, index) => {
  cardsimage.addEventListener("click", () => {
    let expandedCard = document.querySelector(".cardsexpandedwidth");
    console.log("expanded", expandedCard === cardsimage);
    if (expandedCard) {
      expandedCard.classList.replace("cardsexpandedwidth", "cardsinitialwidth");
    }
    if (expandedCard === cardsimage) {
      cardsimage.classList.replace("cardsexpandedwidth", "cardsinitialwidth");
    } else
      cardsimage.classList.replace("cardsinitialwidth", "cardsexpandedwidth");
  });
});
