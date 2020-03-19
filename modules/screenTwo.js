export function screenTwo() {
  console.log("screenTwo start");
  delegationTwo();
}

let json = 0;
let jsonData;
let facts = [];

function delegationTwo() {
  console.log("delegationTwo");
  loadJson();
  loadPics();
}

async function loadJson() {
  let response = await fetch("electricity.json");
  jsonData = await response.json();
  //makeObjects();
}
async function loadPics() {
  let response = await fetch("static/imgs/timelineTwo.svg");
  let timeline = await response.text();
  document.querySelector(".timelineTwo").innerHTML = timeline;
  //countJSON();
}
