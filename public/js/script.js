function showCard(cardId) {
  // Hide all cards
  const cards = document.querySelectorAll(".tabbedNav");
  const buttons = document.querySelectorAll(".btn");
  cards.forEach((card) => {
    card.classList.remove("active-card");
  });
  buttons.forEach((button) => {
    button.classList.remove("active-btn");
  });

  // Show the selected card
  const selectedCard = document.getElementById(cardId);
  selectedCard.classList.add("active-card");
  const selectedbutton = document.querySelector(`.${cardId}-opt-btn`);
  selectedbutton.classList.add("active-btn");
}
