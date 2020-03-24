// SKAL SÆTTES IND I MAIN:
/* import "@babel/polyfill";
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
 */

export function delegationTwo() {
  console.log("delegationTwo");
  initTwo();
  loadJson();
  loadPics();
}

const HTML = {};

const Facts = {
  header: "",
  icon: "",
  content: "",
  number: "",
  color: "",
  lineColor: ""
};

function initTwo() {
  HTML.json = 0;
  HTML.jsonData;
  HTML.facts = [];
  HTML.headerTwo = document.querySelector(".headerTwo");
  HTML.textTwo = document.querySelector(".textTwo");
}

async function loadJson() {
  let response = await fetch("electricity.json");
  HTML.jsonData = await response.json();
  makeObjects();
}
async function loadPics() {
  let response = await fetch("imgs/lisa/timelineAni.svg");
  let timeline = await response.text();
  document.querySelector(".timelineTwo").innerHTML = timeline;
  countJSON();
}

function makeObjects() {
  console.log("makeObjects");
  HTML.jsonData.forEach(entry => {
    const timelineObject = Object.create(Facts);
    timelineObject.header = entry.header;
    timelineObject.icon = entry.icon;
    timelineObject.content = entry.content;
    timelineObject.number = entry.number;
    timelineObject.color = entry.color;
    timelineObject.lineColor = entry.lineColor;

    HTML.facts.push(timelineObject);
  });
  countJSON();
}

function countJSON() {
  console.log("countJSON");
  HTML.json++;
  if (HTML.json == 2) {
    fetchInfo();
    loadAnimations();
    svgListners();
  }
}

function svgListners() {
  const svg = document.querySelector(".lisaSvg");
  document.querySelector(".secondNext").addEventListener("click", function() {
    svg.classList = "";
  });
  document.querySelector(".thirdNext").addEventListener("click", function() {
    setTimeout(() => {
      svg.classList.add("active");
    }, 1000);
  });
}

function loadAnimations() {
  console.log("loadAnimations");
  const header1 = document.querySelector(".header1");
  const ikon1 = document.querySelector(".ikon1");
  ikon1.classList.add("flipInX");
  header1.classList.remove("invisible");
  header1.classList.add("pulse");
  header1.textContent = "Electricity";
  HTML.headerTwo.textContent = "";
  ikon1.style.filter = "none";
  document.querySelector(".start_ikon").addEventListener("click", startTimeline);
}

function startTimeline() {
  console.log("click_container klik");
  const svg = document.querySelector(".lisaSvg");
  document.querySelector(".click_container").classList.add("fadeOut");
  svg.classList.add("active");
  setTimeout(() => {
    console.log("click_container hide");
    document.querySelector(".click_container").classList.remove("fadeOut");
    document.querySelector(".click_container").classList.add("hide");
  }, 500);
}

function fetchInfo() {
  console.log("fetchList");
  document.querySelectorAll("circle").forEach(bullet => {
    console.log("circle");
    bullet.style.fill = "transparent";
    bullet.addEventListener("click", infoBox);
  });
  document.querySelectorAll(".article_container").forEach(icon => {
    console.log("circle");
    icon.addEventListener("click", infoBox);
  });
}

function infoBox(evt) {
  console.log("infoBox");
  HTML.facts.forEach(fact => {
    if (this.dataset.num == fact.number) {
      console.log(this.dataset.num);
      const headerObject = document.querySelector(".header" + fact.number);
      const iconObject = document.querySelector(".ikon" + fact.number);
      const circleObject = document.querySelector(".cirkel" + fact.number);
      headerObject.classList.remove("invisible");
      headerObject.classList.add("pulse");
      headerObject.textContent = fact.header;
      HTML.headerTwo.classList.add("bounceOut");
      HTML.textTwo.classList.add("fadeOut");
      iconObject.classList.add("flipOutX");
      document.querySelector(".lisaSvg").classList.add(fact.lineColor);
      setTimeout(() => {
        iconObject.classList.remove("flipOutX");
        HTML.textTwo.classList.remove("fadeOut");
        HTML.headerTwo.classList.add("bounceIn");
        HTML.headerTwo.classList.remove("bounceOut");
        HTML.headerTwo.textContent = fact.header;
        HTML.textTwo.innerHTML = fact.content;
        HTML.textTwo.classList.add("fadeIn");
        iconObject.style.filter = "none";
        iconObject.classList.add("flipInX");
      }, 500);
      circleObject.style.fill = fact.color;
      circleObject.classList.remove("unclicked");
      HTML.headerTwo.addEventListener("animationend", removeAnimation);
      HTML.textTwo.addEventListener("animationend", removeAnimation);
    }
  });
  nextPage();
}
function removeAnimation() {
  console.log("removeAnimation");
  HTML.headerTwo.classList.remove("bounceIn");
  HTML.textTwo.classList.remove("fadeIn");
}
function nextPage() {
  console.log("nextPage");
  const unclicked = document.querySelector(".unclicked");
  const secondNext = document.querySelector(".secondNext");
  if (unclicked) {
  } else {
    secondNext.classList.remove("greyed_out");
    secondNext.classList.remove("noclick");
    secondNext.classList.add("button_pulse");
  }
}
