export async function getSVG(data, parent) {
  const response = await fetch(data);
  const mySVG = await response.text();

  parent.innerHTML = mySVG;
  hideSVGParts();
  createEventlisteners();
}

function createElement(type) {
  console.log(type);
  return document.createElement(type);
}

function hideSVGParts() {
  let b1 = document.querySelector("#bulb1 polygon");
  let b2 = document.querySelector("#bulb2 polygon");
  let b3 = document.querySelector("#bulb3 polygon");
  let b4 = document.querySelector("#bulb4 polyline");
  let a1 = document.querySelector("#arrow1 polygon");
  let a2 = document.querySelector("#arrow2 polygon");
  let a3 = document.querySelector("#arrow3 polygon");
  let a4 = document.querySelector("#arrow4 polygon");
  let bottom = document.querySelector("#bottom path");
  b1.style.fill = "transparent";
  b2.style.fill = "transparent";
  b3.style.fill = "transparent";
  b4.style.fill = "transparent";
  a1.style.fill = "transparent";
  a2.style.fill = "transparent";
  a3.style.fill = "transparent";
  a4.style.fill = "transparent";
  bottom.style.fill = "black";
  b1.setAttribute("stroke-width", "3px");
  console.log(b1);
  b1.classList.add("dash");
}

function createEventlisteners() {
  console.log("create eventlsiterne");
}
