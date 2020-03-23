import "@babel/polyfill";

//LOAD

window.addEventListener("DOMContentLoaded", start);

//Consts & lets global variables
const globe = document.querySelector("#peter > div.scene");
const myButton = document.querySelector(".explore");
const borderBottom = document.querySelector(".underline");
const text = document.querySelector(".textbox");
const arrow = document.querySelector(".arrow");
const introTxt = document.querySelector(".introtxt");
//adds fade-in animation to a href .explore
//adds eventlistener to .explore and calls function flipOut
export function start() {
  globe.classList.add("hide");
  text.classList.add("hide");
  introTxt.classList.add("hide");
  myButton.classList.add("hide");
  borderBottom.classList.add("hide");
  setTimeout(introScreen, 4000);
}

function introScreen() {
  introTxt.classList.remove("hide");
  introTxt.classList.add("animated", "fadeIn");
  setTimeout(function() {
    introTxt.classList.add("animated", "fadeOut");
  }, 4500);
  setTimeout(exploreButton, 9000);
}

function exploreButton() {
  myButton.classList.remove("hide");
  borderBottom.classList.remove("hide");
  borderBottom.classList.add("drawBorder");
  myButton.classList.add("animated", "fadeIn");
  myButton.addEventListener("click", flipOut);
}

//flipOut
//removes fade-in animation
//adds flipoutx animation from animate.css

function flipOut() {
  //document.querySelector("h1").classList.add("hide");
  //document.querySelector(".categoryWrapper").classList.add("animated", "fadeOut");
  myButton.classList.add("animated", "flipOutX");
  borderBottom.classList.add("animated", "flipOutX");
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
  //document.querySelector(".centerBox").style.height = "400px";
  document.querySelector(".wrapper").classList.add("hide");
  document.querySelector(".box").classList.add("animated", "fadeOut");
  document.querySelector(".left").classList.add("animated", "slideOutLeft");
  document.querySelector(".right").classList.add("animated", "slideOutRight");
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
