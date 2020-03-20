/* import { gallery as pictures, settings } from "./modules/gallery";

document.querySelector("h1").textContent = settings.author;

const data = [{ i: "1.png" }, { i: "2.png" }];

pictures(data, document.body); */

import "@babel/polyfill";

import { getSVG } from "./modules/lasse";

const data = "imgs/lasse/asset.svg";

getSVG(data, document.querySelector(".l-container"));

/* window.addEventListener("DOMContentLoaded", getSVG);
async function getSVG() {
  console.log("ths");
  const response = await fetch("imgs/lasse/asset.svg");
  const mySVG = await response.text();

  console.log(mySVG);
  document.querySelector(".l-container").innerHTML = mySVG;

  createEventlisteners();
} */
