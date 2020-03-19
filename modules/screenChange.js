"use strict";
window.addEventListener("DOMContentLoaded", targetScreen);
const buttons = document.querySelectorAll("button");
let newClass;

function targetScreen() {
  console.log("start");
  buttons.forEach(clickedB => {
    clickedB.addEventListener("click", function(event) {
      event.target.parentNode.classList.add("hide");
      if (event.target.classList[0] == "next") {
        const newClass = ShowNextScreen();
        document.querySelector(newClass).classList.remove("hide");
      }
      if (event.target.classList[0] == "back") {
        ShowPrevScreen();
      }
      if (event.target.classList[0] == "start") {
        document.querySelector(".divI").classList.remove("hide");
      }
    });
  });
}

function ShowNextScreen() {
  console.log("setClassNames");
  const className = event.target.parentNode.classList[0];
  const newClass = "." + className + "I";
  return newClass;
}

function ShowPrevScreen() {
  const className = event.target.parentNode.classList[0];
  const subClass = className.substring(className.indexOf(" "), className.length - 1);
  const newClass = "." + subClass;
  document.querySelector(newClass).classList.remove("hide");
}
