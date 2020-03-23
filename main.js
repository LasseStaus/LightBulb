import "@babel/polyfill";
import { screenTwo } from "./modules/screenTwo";
import { targetScreen } from "./modules/screenChange";
("use strict");
window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  screenTwo();
  targetScreen();
  setTimeout(() => {
    document.querySelector(".screenI").classList.remove("hide");
    document.querySelector(".screenI").classList.add("fadeIn");
  }, 500);
  setTimeout(() => {
    document.querySelector(".screenI").classList.remove("fadeIn");
  }, 1000);
}
