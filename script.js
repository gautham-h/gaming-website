// GameZone - JavaScript

// Explore Games button
const exploreButton = document.querySelector(".hero button");

exploreButton.addEventListener("click", function () {
    document.querySelector(".games").scrollIntoView({
        behavior: "smooth"
    });
});

// Gaming website welcome message
console.log("Welcome to GameZone!");

// Game card interaction
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const gameName = card.querySelector("h3").textContent;
        alert("You selected " + gameName + "!");
    });
});
