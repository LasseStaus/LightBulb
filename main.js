"use strict";
import { delegationTwo } from "./modules/screenTwo";
import { targetScreen } from "./modules/screenChange";
import { getSVG } from "./modules/lasse";
import { start as peterStart } from "./modules/peter";
import "@babel/polyfill";

window.addEventListener("DOMContentLoaded", startLisa);
const data = "imgs/lasse/newtestsvg.svg";

function startLisa() {
  console.log("start");
  const audio = document.querySelector("#music");
  document.querySelector(".introScreenText2").addEventListener("click", function() {
    audio.play();
  });
  audio.volume = 0.5;
  getSVG(data, document.querySelector(".l-container"));
  delegationTwo();
  peterStart();
  targetScreen();
  setTimeout(() => {
    document.querySelector(".screenI").classList.remove("hide");
  }, 500);
  setTimeout(() => {
    document.querySelector(".screenI").classList.remove("fadeInL");
  }, 1000);

  audio.addEventListener("ended", repeatMusic);
}
function repeatMusic() {
  const audio = document.querySelector("#music");
  console.log("music");
  this.currentTime = 0;
  audio.play();
}
