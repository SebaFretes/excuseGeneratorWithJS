/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My sister", "The chef", "My fox"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car", "the laptop"];
  let when = [
    "before the meeting",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch"
  ];

  const aRandomItem = item => {
    return item[Math.floor(Math.random() * item.length)];
  };

  let excuse = `${aRandomItem(who)} ${aRandomItem(action)} ${aRandomItem(
    what
  )} ${aRandomItem(when)}`;
  document.getElementById("excuse").innerHTML = excuse;
};
