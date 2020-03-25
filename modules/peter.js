import "@babel/polyfill";

//LOAD

window.addEventListener("DOMContentLoaded", start);

//Consts & lets global variables
const globe = document.querySelector("#peter > div.scene");
const myButton = document.querySelector("#peter .explore");
const borderBottom = document.querySelector("#peter .underline");
const text = document.querySelector(".textbox");
const arrow = document.querySelector(".arrow");
const introTxt = document.querySelector(".introtxt");
const bulbWire = document.querySelector(".bulb-wire");
//adds fade-in animation to a href .explore
//adds eventlistener to .explore and calls function flipOut
export function start() {
  globe.classList.add("phide");
  text.classList.add("phide");
  introTxt.classList.add("phide");
  myButton.style.display = "none";
  borderBottom.classList.add("phide");
  setTimeout(introScreen, 400);
}

function introScreen() {
  introTxt.classList.remove("phide");
  introTxt.classList.add("animated", "fadeIn");
  setTimeout(function() {
    introTxt.classList.add("animated", "fadeOut");
  }, 4700);
  setTimeout(exploreButton, 1000);
}

function exploreButton() {
  myButton.style.display = "flex";
  borderBottom.classList.remove("phide");
  borderBottom.classList.add("drawBorder");
  myButton.classList.add("animated", "fadeIn");
  myButton.addEventListener("click", flipOut);
}

//flipOut
//removes fade-in animation
//adds flipoutx animation from animate.css

function flipOut() {
  bulbWire.classList.add("phide");

  myButton.classList.add("animated", "flipOutX");
  borderBottom.classList.add("animated", "flipOutX");
  // delay function fetchSvg
  setTimeout(globeRotate, 1200);
}

function globeRotate() {
  document.querySelector("#peter .wrapper").style.display = "none";
  //document.querySelector(".centerBox").style.height = "400px";
  document.querySelector(".wrapper").classList.add("phide");
  document.querySelector(".box").classList.add("animated", "fadeOut");
  document.querySelector(".left").classList.add("animated", "slideOutLeft");
  document.querySelector(".right").classList.add("animated", "slideOutRight");
  globe.classList.remove("phide");
  globe.classList.add("animated", "fadeInDown");
  setTimeout(textAppear, 1000);
}

function textAppear() {
  text.classList.remove("phide");
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
  document.querySelector("#lisa").classList.remove("phide");
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

let fills;

function SvgAnimationCity() {
  let citySvg = document.querySelector("#PetersHuse svg");
  document.querySelector("#peterFills").classList.add("phide");
  citySvg.classList.add("animated", "fadeInUp");
  console.log("her er vi nu");
  citySvg.addEventListener("animationend", fillColours);

  /* 
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

  setTimeout(fillColours, 2000); */
}

function fillColours() {
  document.querySelector("#outlines").setAttribute("stroke-dasharray", "0px");
  document.querySelector("#peterFills").classList.remove("phide");

  document.querySelector("#moon > circle ").style.fill = "beige";

  /*   document.querySelector("#outlines > g > path:nth-child(1)").style.fill = "";
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
  document.querySelector("#outlines > g > path:nth-child(323)").style.fill = ""; */

  document.querySelectorAll(".cls-7").forEach(e => {
    e.classList.remove("cls-7");
  });

  //document.querySelector("#outlines").classList.add("animated", "fadeIn");
  document.querySelector("#outlines").style.stroke = "none";
  document.querySelector("#outlines").style.strokeWidth = "0";

  document.querySelector("#peterFills").classList.add("animated", "fadeIn");
  document.querySelector("#peterFills").addEventListener("animationend", animateWindows);

  /*   document.querySelector("#outlines > g > path:nth-child(266)").style.fill = "beige";
   */
  /*  document.querySelectorAll("#window32 > polyline, #window31 > polyline , #window30 > polyline ").forEach(windows => {
    console.log("function starts ");
    for (let i = 0; i < 9; i++) {
      console.log("for loop");
      setTimeout(() => {
        console.log("settimeout");
        windows.style.fill = " red";
      }, 1000);
    }
  }); */
  /*   document.querySelectorAll("g").forEach(gruppe => {
    let g = gruppe.childNodes;
    console.log(g);

  }); */
}

function animateWindows() {
  setTimeout(() => {
    document.querySelector("#window32 > polyline ").style.fill = "beige";
  }, 500);

  setTimeout(() => {
    document.querySelector("#window31 > polyline ").style.fill = "beige";
  }, 700);

  setTimeout(() => {
    document.querySelector("#window30 > polyline ").style.fill = "beige";
  }, 900);

  setTimeout(() => {
    document.querySelector("#window29 > rect ").style.fill = "beige";
  }, 1100);

  setTimeout(() => {
    document.querySelector("#window28 > rect ").style.fill = "beige";
  }, 1300);

  setTimeout(() => {
    document.querySelector("#window27 > polygon ").style.fill = "beige";
  }, 1500);

  setTimeout(() => {
    document.querySelector("#window26 > rect ").style.fill = "beige";
  }, 1700);
  setTimeout(() => {
    document.querySelector("#window25 > polygon ").style.fill = "beige";
  }, 1900);
  setTimeout(() => {
    document.querySelector("#window24 > rect ").style.fill = "beige";
  }, 2100);
  setTimeout(() => {
    document.querySelector("#window23 > rect ").style.fill = "beige";
  }, 2300);
  setTimeout(() => {
    document.querySelector("#window22 > rect ").style.fill = "beige";
  }, 2500);
  setTimeout(() => {
    document.querySelector("#window21 > rect ").style.fill = "beige";
  }, 2800);
  setTimeout(() => {
    document.querySelector("#window20 > rect ").style.fill = "beige";
  }, 3000);
  setTimeout(() => {
    document.querySelector("#window19 > rect ").style.fill = "beige";
  }, 3200);
  setTimeout(() => {
    document.querySelector("#window18 > rect ").style.fill = "beige";
  }, 3400);
  setTimeout(() => {
    document.querySelector("#window17 > rect ").style.fill = "beige";
  }, 3600);
  setTimeout(() => {
    document.querySelector("#window16 > rect ").style.fill = "beige";
  }, 3800);
  setTimeout(() => {
    document.querySelector("#window15 > rect ").style.fill = "beige";
  }, 4100);
  setTimeout(() => {
    document.querySelector("#window14 > rect ").style.fill = "beige";
  }, 4300);
  setTimeout(() => {
    document.querySelector("#window13 > rect ").style.fill = "beige";
  }, 4500);
  setTimeout(() => {
    document.querySelector("#window12 > polygon ").style.fill = "beige";
  }, 4700);
  setTimeout(() => {
    document.querySelector("#window11 > rect ").style.fill = "beige";
  }, 4900);
  setTimeout(() => {
    document.querySelector("#window10 > rect ").style.fill = "beige";
  }, 5100);
  setTimeout(() => {
    document.querySelector("#window9 > polygon ").style.fill = "beige";
  }, 5300);
  setTimeout(() => {
    document.querySelector("#window8 > polygon ").style.fill = "beige";
  }, 5500);
  setTimeout(() => {
    document.querySelector("#window7 > rect ").style.fill = "beige";
  }, 5700);
  setTimeout(() => {
    document.querySelector("#window6 > rect ").style.fill = "beige";
  }, 5900);
  setTimeout(() => {
    document.querySelector("#window5 > polygon ").style.fill = "beige";
  }, 6100);
  setTimeout(() => {
    document.querySelector("#window4 > rect ").style.fill = "beige";
  }, 6300);
  setTimeout(() => {
    document.querySelector("#window3 > rect ").style.fill = "beige";
  }, 6500);
  setTimeout(() => {
    document.querySelector("#window2 > rect ").style.fill = "beige";
  }, 6700);
  setTimeout(() => {
    document.querySelector("#window1 > polygon ").style.fill = "beige";
  }, 6900);

  setTimeout(() => {
    document.querySelector("#streetlight > polygon ").style.fill = "beige";
  }, 7000);
}

/* fills.forEach(element => {}); */
