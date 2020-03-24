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
const bulbWire = document.querySelector(".bulb-wire");
//adds fade-in animation to a href .explore
//adds eventlistener to .explore and calls function flipOut
export function start() {
  globe.classList.add("hide");
  text.classList.add("hide");
  introTxt.classList.add("hide");
  myButton.classList.add("hide");
  borderBottom.classList.add("hide");
  setTimeout(introScreen, 400);
}

function introScreen() {
  introTxt.classList.remove("hide");
  introTxt.classList.add("animated", "fadeIn");
  setTimeout(function() {
    introTxt.classList.add("animated", "fadeOut");
  }, 4700);
  setTimeout(exploreButton, 1000);
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
  bulbWire.classList.add("hide");

  myButton.classList.add("animated", "flipOutX");
  borderBottom.classList.add("animated", "flipOutX");
  // delay function fetchSvg
  setTimeout(globeRotate, 1200);
}

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
  console.log("fadeOutAll");
  globe.classList.add("animated", "fadeOutUp");
  text.classList.add("animated", "flipOutY");
  arrow.classList.add("animated", "lightSpeedOut");
  setTimeout(goScreenTwo, 1200);
}

function goScreenTwo() {
  console.log("goScreenTwo");
  document.querySelector("#peter").style.display = "none";
  document.querySelector("#lisa").classList.remove("hide");
  document.querySelector(".thirdNext").addEventListener("click", cityBuild);
}

//async function fetchSvg
//fetches svg
async function cityBuild() {
  console.log("build");
  let response = await fetch("imgs/peter/purplecity2.svg");
  let mySvgData = await response.text();
  document.querySelector("#PetersHuse").innerHTML = mySvgData;
  SvgAnimationCity();
}

function SvgAnimationCity() {
  let citySvg = document.querySelector("svg");
  citySvg.classList.add("animated", "fadeInUp");

  document.querySelector("#fills").classList.add("hide");

  document.querySelector("#outlines > g > path:nth-child(1)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(2)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(3)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(4)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(5)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(6)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(7)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(8)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(9)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(10)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(11)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(12)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(13)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(14)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(15)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(16)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(17)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(18)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(19)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(20)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(21)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(22)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(23)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(24)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(25)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(26)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(27)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(28)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(29)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(30)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(31)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(32)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(33)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(34)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(35)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(36)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(37)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(38)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(39)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(40)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(41)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(42)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(43)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(44)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(46)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(47)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(48)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(49)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(50)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(51)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(52)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(53)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(266)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(254)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(267)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(357)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(247)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(255)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(361)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(259)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(258)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(260)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(256)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(273)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(246)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(257)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(362)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(328)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(261)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(275)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(62)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(262)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(316)").style.fill = "white";
  document.querySelector("#outlines > g > path:nth-child(323)").style.fill = "white";

  setTimeout(fillColours, 2000);
}

function fillColours() {
  document.querySelector("#outlines").setAttribute("stroke-dasharray", "0px");
  document.querySelector("#fills").classList.remove("hide");
  document.querySelector("#outlines > g > path:nth-child(1)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(2)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(3)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(4)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(5)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(6)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(7)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(8)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(9)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(10)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(11)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(12)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(13)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(14)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(15)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(16)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(17)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(18)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(19)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(20)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(21)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(22)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(23)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(24)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(25)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(26)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(27)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(28)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(29)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(30)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(31)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(32)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(33)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(34)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(35)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(36)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(37)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(38)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(39)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(40)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(41)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(42)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(43)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(44)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(46)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(47)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(48)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(49)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(50)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(51)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(52)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(53)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(266)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(254)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(267)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(357)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(247)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(255)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(361)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(259)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(258)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(260)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(256)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(273)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(246)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(257)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(362)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(328)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(261)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(275)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(62)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(262)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(316)").style.fill = "";
  document.querySelector("#outlines > g > path:nth-child(323)").style.fill = "";

  //document.querySelector("#outlines").classList.add("animated", "fadeIn");
  document.querySelector("#outlines").style.stroke = "none";
  document.querySelector("#outlines").style.strokeWidth = "0";

  document.querySelector("#fills").classList.add("animated", "fadeIn");

  document.querySelector("#outlines > g > path:nth-child(266)").style.fill = "yellow";
}
