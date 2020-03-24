"use strict";
import "@babel/polyfill";
import { delegationTwo } from "./modules/screenTwo";
import { targetScreen } from "./modules/screenChange";

window.addEventListener("DOMContentLoaded", startLisa);

function startLisa() {
  console.log("start");
  delegationTwo();
  targetScreen();
  setTimeout(() => {
    document.querySelector(".screenI").classList.remove("hide");
    document.querySelector(".screenI").classList.add("fadeIn");
  }, 500);
  setTimeout(() => {
    document.querySelector(".screenI").classList.remove("fadeIn");
  }, 1000);
}
