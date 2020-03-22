import "@babel/polyfill";

//LOAD

window.addEventListener("DOMContentLoaded", start);

//Consts & lets global variables
const globe = document.querySelector("#peter > div.scene");
const myButton = document.querySelector(".explore");
const text = document.querySelector(".textbox");
const arrow = document.querySelector(".arrow");
//adds fade-in animation to a href .explore
//adds eventlistener to .explore and calls function flipOut
function start() {
  globe.classList.add("hide");
  text.classList.add("hide");
  document.querySelector("h1").classList.add("fade-in");
  document.querySelector(".explore").classList.add("fade-in");
  document.querySelector(".explore").addEventListener("click", flipOut);
}

//flipOut
//removes fade-in animation
//adds flipoutx animation from animate.css

function flipOut() {
  myButton.classList.remove("fade-in");
  document.querySelector("h1").classList.add("hide");
  document.querySelector(".categoryWrapper").classList.add("animated", "fadeOut");
  myButton.classList.add("animated", "flipOutX");
  // delay function fetchSvg
  setTimeout(globeRotate, 1200);
}

//async function fetchSvg
//fetches globe svg
//TO-DO: Globe has to "draw" itself instead of fading in

/* async function fetchSvg() {
  let response = await fetch("imgs/peter/klode.svg");
  let mySvgData = await response.text();
  document.querySelector(".container").innerHTML = mySvgData;
  const GlobeSvg = document.querySelector("g");
  GlobeSvg.classList.add("animated", "fadeIn");
} */

function globeRotate() {
  document.querySelector(".centerBox").style.height = "400px";
  globe.classList.remove("hide");
  globe.classList.add("animated", "fadeInDown");
  setTimeout(textAppear, 1000);
}

function textAppear() {
  text.classList.remove("hide");
  text.classList.add("fade-in");
  arrow.addEventListener("click", fadeOutAll);
}

function fadeOutAll() {
  globe.classList.add("animated", "fadeOutUp");
  text.classList.add("animated", "flipOutY");
  arrow.classList.add("animated", "lightSpeedOut");
}
