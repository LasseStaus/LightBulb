import "@babel/polyfill";

//LOAD

//Consts & lets global variables
const globe = document.querySelector("#peter > div.scene");
const myButton = document.querySelector("#peter .explore");
const borderBottom = document.querySelector("#peter .underline");
const text = document.querySelector(".textbox");
const arrow = document.querySelector("#peter .next");
const introTxt = document.querySelector(".introtxt");
const bulbWire = document.querySelector(".bulb-wire");
const logo = document.querySelector("#peter .logo");
const logoText1 = document.querySelector("#peter .introScreenText");
const logoText2 = document.querySelector("#peter .introScreenText2");
//adds fade-in animation to a href .explore
//adds eventlistener to .explore and calls function flipOut
export function start() {
  console.log(logo);
  logo.style.display = "none";
  logoText1.style.display = "none";
  logoText2.style.display = "none";

  document.querySelector("#peter .back").style.display = "none";
  document.querySelector("#peter .home").style.display = "none";
  document.querySelector("#peter .next").style.display = "none";

  museumAni();
}

function museumAni() {
  globe.classList.add("phide");
  text.classList.add("phide");
  introTxt.classList.add("phide");
  myButton.style.display = "none";
  borderBottom.classList.add("phide");
  logo.style.display = "block";
  logo.classList.add("animated", "zoomIn");
  logo.classList.add("slower");
  logo.addEventListener("animationend", () => {
    logoText1.style.display = "block";
    logoText1.classList.add("animated", "fadeIn");
    logoText1.addEventListener("animationend", () => {
      logoText2.style.display = "block";
      logoText2.classList.add("animated", "fadeIn");
      logoText2.addEventListener("animationend", () => {
        logoText2.classList.remove("animated", "fadeIn");
        logoText2.classList.remove("slower");
        logoText2.classList.add("button_pulse");
        logoText2.addEventListener("click", aftermuseum);
      });
    });
  });
}

function aftermuseum() {
  document.querySelector("#peter .introScreen").classList.add("animated", "slideOutUp");
  document.querySelector("#peter .introScreen").classList.add("slower");
  bulbWire.classList.add("animationBulb");

  setTimeout(introScreen, 2000);
}

function introScreen() {
  introTxt.classList.remove("phide");
  introTxt.classList.add("animated", "fadeIn");
  setTimeout(function() {
    introTxt.classList.add("animated", "fadeOut");
  }, 4400);
  setTimeout(exploreButton, 5600);
}

function exploreButton() {
  myButton.style.display = "flex";
  borderBottom.classList.remove("phide");
  borderBottom.classList.add("drawBorder");
  myButton.classList.add("animated", "fadeIn");
  myButton.addEventListener("animationend", () => {
    myButton.classList.remove("animated", "fadeIn");
    myButton.classList.add("button_pulse");
    myButton.addEventListener("click", flipOut);
  });
}

//flipOut
//removes fade-in animation
//adds flipoutx animation from animate.css

function flipOut() {
  bulbWire.classList.add("phide");
  myButton.classList.add("animated", "flipOutX");
  borderBottom.classList.remove("drawBorder");
  borderBottom.classList.add("undrawBorder");
  // delay function fetchSvg
  setTimeout(globeRotate, 1000);
}

function globeRotate() {
  document.querySelector("#peter .back").style.display = "block";
  document.querySelector("#peter .home").style.display = "block";
  document.querySelector("#peter .next").style.display = "block";
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
  arrow.addEventListener("click", function() {
    text.classList.remove("fade-in");
    fadeOutAll();
  });
}

function fadeOutAll() {
  console.log("fadeOutAll");
  text.classList.add("animated", "flipOutY");
  globe.classList.add("animated", "fadeOutUp");
  setTimeout(goScreenTwo, 1200);
}

function goScreenTwo() {
  console.log("goScreenTwo");
  document.querySelector("#peter").style.display = "none";
  document.querySelector("#lisa").classList.remove("hide");
  document.querySelector("#lisa .click_container").classList.remove("hide");
  document.querySelector("#lisa").classList.add("fadeInL");
  document.querySelector("#lisa .click_container").classList.add("fadeInL");
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
}

function fillColours() {
  document.querySelector("#outlines").setAttribute("stroke-dasharray", "0px");
  document.querySelector("#peterFills").classList.remove("phide");
  document.querySelector("#moon > circle ").style.fill = "beige";
  document.querySelectorAll(".cls-7").forEach(e => {
    e.classList.remove("cls-7");
  });
  document.querySelector("#outlines").style.stroke = "none";
  document.querySelector("#outlines").style.strokeWidth = "0";
  document.querySelector("#peterFills").classList.add("animated", "fadeIn");
  document.querySelector("#peterFills").addEventListener("animationend", animateWindows);
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
  const city = document.querySelector("#citybuildingitself");
  if (city.classList[1] == "hide") {
    console.log("Lasses skærm");
  } else {
    console.log("peters skærm");
    setTimeout(() => {
      lastScreen();
    }, 7500);
  }
}
function lastScreen() {
  const city = document.querySelector("#citybuildingitself");
  if (city.classList[1] == "hide") {
    console.log("Lasses skærm");
  } else {
    console.log("peters skærm");
    document.querySelector("#citybuildingitself > .click_container  ").classList.remove("phide");
    document.querySelector("#citybuildingitself > .click_container > .endTxt").classList.add("animated", "flipInX");
    document.querySelector("#citybuildingitself > .click_container  ").classList.add("animated", "fadeIn");
    document.querySelector(".fourthBack").addEventListener("click", function() {
      document.querySelector("#citybuildingitself > .click_container  ").classList.add("phide");
      document.querySelector("#citybuildingitself > .click_container > .endTxt").classList.remove("animated", "flipInX");
      document.querySelector("#citybuildingitself > .click_container  ").classList.remove("animated", "fadeIn");
    });
  }
}
/* fills.forEach(element => {}); */
