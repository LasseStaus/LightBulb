export function screenTwo() {
  console.log("screenTwo start");
  delegationTwo();
}

let json = 0;
let jsonData;
let facts = [];
let theChosenColor;

const Facts = {
  header: "",
  icon: "",
  content: "",
  number: "",
  color: ""
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

    facts.push(timelineObject);
  });
  countJSON();
}

function countJSON() {
  json++;
  if (json == 2) {
    fetchList();
  }
}

function fetchList() {
  console.log("fetchList");
  document.querySelectorAll("circle").forEach(bullet => {
    console.log("circle");
    bullet.style.fill = "transparent";
    document.querySelector(".st1").style.fill = "#fffcb3";
    document.querySelector(".headerTwo").textContent = facts[0].header;
    document.querySelector(".textTwo").textContent = facts[0].content;
    document.querySelector(".st1").style.fill = facts[0].color;
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
      document.querySelector(".header" + fact.number).textContent = fact.header;
      document.querySelector(".headerTwo").classList.add("bounceOut");
      document.querySelector(".textTwo").classList.add("fadeOut");
      setTimeout(() => {
        document.querySelector(".textTwo").classList.remove("fadeOut");
        document.querySelector(".headerTwo").classList.add("bounceIn");
        document.querySelector(".headerTwo").classList.remove("bounceOut");
        document.querySelector(".headerTwo").textContent = fact.header;
        document.querySelector(".textTwo").textContent = fact.content;
        document.querySelector(".textTwo").classList.add("fadeIn");
      }, 500);
      document.querySelector(".ikon" + fact.number).style.filter = "none";
      document.querySelector(".ikon" + fact.number).classList.add("flipInX");
      document.querySelector(".cirkel" + fact.number).style.fill = fact.color;
      document.querySelector(".headerTwo").addEventListener("animationend", removeAnimation);
      document.querySelector(".textTwo").addEventListener("animationend", removeAnimation);
    }
  });
}
function removeAnimation() {
  console.log("noAni");
  document.querySelector(".headerTwo").classList.remove("bounceIn");
  document.querySelector(".textTwo").classList.remove("fadeIn");
}
