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

export function screenTwo() {
  console.log("screenTwo start");
  delegationTwo();
}

let json = 0;
let jsonData;
let facts = [];

const Facts = {
  header: "",
  icon: "",
  content: "",
  number: "",
  color: "",
  lineColor: ""
};

function delegationTwo() {
  console.log("delegationTwo");
  loadJson();
  loadPics();
}

async function loadJson() {
  let response = await fetch("electricity.json");
  jsonData = await response.json();
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
  jsonData.forEach(entry => {
    const timelineObject = Object.create(Facts);
    timelineObject.header = entry.header;
    timelineObject.icon = entry.icon;
    timelineObject.content = entry.content;
    timelineObject.number = entry.number;
    timelineObject.color = entry.color;
    timelineObject.lineColor = entry.lineColor;

    facts.push(timelineObject);
  });
  countJSON();
}

function countJSON() {
  console.log("countJSON");
  json++;
  if (json == 2) {
    fetchList();
    loadAnimations();
  }
}

function loadAnimations() {
  console.log("loadAnimations");
  document.querySelector(".st1").style.fill = facts[0].color;
  document.querySelector(".headerTwo").textContent = facts[0].header;
  document.querySelector(".textTwo").innerHTML = facts[0].content;
  document.querySelector(".firstNext").addEventListener("click", function() {
    setTimeout(() => {
      document.querySelector("svg").classList.add("active");
    }, 1000);
    //Klasser der skal sættes når der klikkes på .next fra forrige skærm
    facts.forEach(fact => {
      document.querySelector(".ikon1").classList.add("flipOutX");
      setTimeout(() => {
        document.querySelector(".ikon1").classList.remove("flipOutX");
        document.querySelector(".ikon1").classList.add("flipInX");
        document.querySelector(".ikon1").style.filter = "none";
      }, 900);
      document.querySelector(".header1").classList.remove("invisible");
      document.querySelector(".header1").classList.add("pulse");
    });
  });
  document.querySelector(".thirdNext").addEventListener("click", function() {
    setTimeout(() => {
      document.querySelector("svg").classList.add("active");
    }, 1000);
    //Klasser der skal sættes når der klikkes på .next fra forrige skærm
    facts.forEach(fact => {
      document.querySelector(".ikon1").classList.add("flipOutX");
      setTimeout(() => {
        document.querySelector(".ikon1").classList.remove("flipOutX");
        document.querySelector(".ikon1").classList.add("flipInX");
        document.querySelector(".ikon1").style.filter = "none";
      }, 900);
      document.querySelector(".header1").classList.remove("invisible");
      document.querySelector(".header1").classList.add("pulse");
    });
  });
}

function fetchList() {
  console.log("fetchList");
  document.querySelectorAll("circle").forEach(bullet => {
    console.log("circle");
    bullet.style.fill = "transparent";
    bullet.addEventListener("click", infoBox);
  });
}

function infoBox(evt) {
  console.log("infoBox");
  facts.forEach(fact => {
    if (this.dataset.num == fact.number) {
      console.log(this.dataset.num);
      document.querySelector(".header" + fact.number).classList.remove("invisible");
      document.querySelector(".header" + fact.number).classList.add("pulse");
      document.querySelector("svg").classList.add(fact.lineColor);
      document.querySelector(".header" + fact.number).textContent = fact.header;
      document.querySelector(".headerTwo").classList.add("bounceOut");
      document.querySelector(".textTwo").classList.add("fadeOut");
      document.querySelector(".ikon" + fact.number).classList.add("flipOutX");
      setTimeout(() => {
        document.querySelector(".ikon" + fact.number).classList.remove("flipOutX");
        document.querySelector(".textTwo").classList.remove("fadeOut");
        document.querySelector(".headerTwo").classList.add("bounceIn");
        document.querySelector(".headerTwo").classList.remove("bounceOut");
        document.querySelector(".headerTwo").textContent = fact.header;
        document.querySelector(".textTwo").innerHTML = fact.content;
        document.querySelector(".textTwo").classList.add("fadeIn");
        document.querySelector(".ikon" + fact.number).style.filter = "none";
        document.querySelector(".ikon" + fact.number).classList.add("flipInX");
      }, 500);
      document.querySelector(".cirkel" + fact.number).style.fill = fact.color;
      document.querySelector(".cirkel" + fact.number).classList.remove("unclicked");
      document.querySelector(".headerTwo").addEventListener("animationend", removeAnimation);
      document.querySelector(".textTwo").addEventListener("animationend", removeAnimation);
    }
  });
  nextPage();
}
function removeAnimation() {
  console.log("noAni");
  document.querySelector(".headerTwo").classList.remove("bounceIn");
  document.querySelector(".textTwo").classList.remove("fadeIn");
}
function nextPage() {
  const unclicked = document.querySelector(".unclicked");
  console.log("nextPage");
  if (unclicked) {
    console.log("unclicked");
  } else {
    console.log("clicked");
    document.querySelector(".secondNext").classList.remove("greyed_out");
    document.querySelector(".secondNext").classList.remove("noclick");
    document.querySelector(".secondNext").classList.add("button_pulse");
  }
}
