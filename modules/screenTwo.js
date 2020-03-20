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
  json++;
  if (json == 2) {
    fetchList();
    loadAnimations();
  }
}

function loadAnimations() {
  console.log("loadAnimations");
  document.querySelector(".next").addEventListener("click", function() {
    document.querySelector("svg").classList.add("active");
    //Klasser der skal sættes når der klikkes på .next fra forrige skærm
    facts.forEach(fact => {
      document.querySelector(".st1").style.fill = facts[0].color;
      document.querySelector(".headerTwo").textContent = facts[0].header;
      document.querySelector(".textTwo").textContent = facts[0].content;
      document.querySelector(".ikon1").classList.add("flipOutX");
      setTimeout(() => {
        document.querySelector(".ikon1").classList.remove("flipOutX");
        document.querySelector(".ikon1").classList.add("flipInX");
        document.querySelector(".ikon1").style.filter = "none";
      }, 500);
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
        document.querySelector(".textTwo").textContent = fact.content;
        document.querySelector(".textTwo").classList.add("fadeIn");
        document.querySelector(".ikon" + fact.number).style.filter = "none";
        document.querySelector(".ikon" + fact.number).classList.add("flipInX");
      }, 500);
      document.querySelector(".cirkel" + fact.number).style.fill = fact.color;
      document.querySelector(".headerTwo").addEventListener("animationend", removeAnimation);
      document.querySelector(".textTwo").addEventListener("animationend", removeAnimation);
    }
    if (this.dataset.num == "6") {
      console.log("Gør NEXT klikbar");
      document.querySelector(".next").classList.remove("greyed_out");
      document.querySelector(".next").classList.add("button_pulse");
    }
  });
}
function removeAnimation() {
  console.log("noAni");
  document.querySelector(".headerTwo").classList.remove("bounceIn");
  document.querySelector(".textTwo").classList.remove("fadeIn");
}
