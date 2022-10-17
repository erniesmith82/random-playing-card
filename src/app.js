/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = ["♦", "♥", "♠", "♣"];

  let cardFace = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let scramble = setInterval(generateSuits, 100);
  let scramble2 = setInterval(generateNumber, 100);

  function stopShuffle() {
    clearInterval(scramble);
    clearInterval(scramble2);
  }

  function generateNumber() {
    document.getElementById("randomNumber").innerHTML =
      cardFace[Math.floor(Math.random() * cardFace.length)];
  }

  function generateSuits() {
    let selectedSuit = suits[Math.floor(Math.random() * suits.length)];
    let selectedColor = suitColor(selectedSuit);
    document.getElementById("top").innerHTML = selectedSuit;
    document.getElementById("top").style.color = selectedColor;
    document.getElementById("bottom").innerHTML = selectedSuit;
    document.getElementById("bottom").style.color = selectedColor;
  }
  function suitColor(selectedSuit) {
    if (selectedSuit == "♦" || selectedSuit == "♥") {
      return "red";
    } else if (selectedSuit == "♠" || selectedSuit == "♣") {
      return "black";
    }
  }

  document.getElementById("clickMe").addEventListener("click", generateNumber);

  document.getElementById("clickMe").addEventListener("click", generateSuits);

  document.getElementById("clickMe2").addEventListener("click", stopShuffle);
};
