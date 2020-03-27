/* import { gallery as pictures, settings } from "./modules/gallery";

document.querySelector("h1").textContent = settings.author;

const data = [{ i: "1.png" }, { i: "2.png" }];

pictures(data, document.body); */
"use strict";
import { delegationTwo } from "./modules/screenTwo";
import { targetScreen } from "./modules/screenChange";

window.addEventListener("DOMContentLoaded", startLisa);

function startLisa() {
  console.log("start");
  const audio = document.querySelector("#music");
  document.querySelector(".introScreenText2").addEventListener("click", function() {
    audio.play();
  });
  audio.volume = 0.5;
  getSVG(data, document.querySelector(".l-container"));
  delegationTwo();
  targetScreen();
  setTimeout(() => {
    document.querySelector(".screenI").classList.remove("hide");
  }, 500);
  setTimeout(() => {
    document.querySelector(".screenI").classList.remove("fadeInL");
  }, 1000);

  audio.addEventListener("ended", repeat_music);
}
function repeat_music() {
  const audio = document.querySelector("#music");
  console.log("music");
  this.currentTime = 0;
  audio.play();
}

import "@babel/polyfill";

import { getSVG } from "./modules/lasse";
import { start as peterStart } from "./modules/peter";
peterStart();

const data = "imgs/lasse/newtestsvg.svg";

/* const gdata = [{ i: "desktop.svg" }];
gallery(gdata, document.querySelector(".img")); */

/* window.addEventListener("DOMContentLoaded", getSVG);
async function getSVG() {
  console.log("ths");
  const response = await fetch("imgs/lasse/asset.svg");
  const mySVG = await response.text();

  console.log(mySVG);
  document.querySelector(".l-container").innerHTML = mySVG;

  createEventlisteners();
} */
