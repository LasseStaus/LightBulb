export async function getSVG(data, parent) {
  const response = await fetch(data);
  const mySVG = await response.text();
  parent.innerHTML = mySVG;
  hideSVGParts();
}
function text(textVar, parent, type) {
  const l = createElement(type);
  l.textContent = textVar;
  parent.appendChild(l);
}

function gallery(data, parent, type) {
  data.forEach(d => {
    const t = createElement(type);
    t.src = "imgs/lasse/" + d.i;
    parent.appendChild(t);
  });
}

function createElement(type) {
  return document.createElement(type);
}

let textVar = "this is a test";
let counter = 0;
let pictureVar;
let containerVar;
let b1, b2, b3, b4, a1, a2, a3, a4, bottom, box1, box2, box3, box4;

//icon data
const data1 = [{ i: "desktop.svg" }, { i: "desktop.svg" }];
const data2 = [{ i: "desktop.svg" }, { i: "desktop.svg" }, { i: "desktop.svg" }];
const data3 = [{ i: "desktop.svg" }, { i: "desktop.svg" }, { i: "desktop.svg" }];
const data4 = [{ i: "desktop.svg" }, { i: "desktop.svg" }, { i: "desktop.svg" }];

function hideSVGParts() {
  b1 = document.querySelector("#bulb1 polygon");
  b2 = document.querySelector("#bulb2 polygon");
  b3 = document.querySelector("#bulb3 polygon");
  b4 = document.querySelector("#bulb4 polyline");
  a1 = document.querySelector("#arrow1 polygon");
  a2 = document.querySelector("#arrow2 polygon");
  a3 = document.querySelector("#arrow3 polygon");
  a4 = document.querySelector("#arrow-4");
  box1 = document.querySelector(".box1");
  box2 = document.querySelector(".box2");
  box3 = document.querySelector(".box3");
  box4 = document.querySelector(".box4");
  bottom = document.querySelector("#bottom path");
  b1.style.fill = "transparent";
  b2.style.fill = "transparent";
  b3.style.fill = "transparent";
  b4.style.fill = "transparent";
  a1.style.fill = "transparent";
  a2.style.fill = "transparent";
  a3.style.fill = "transparent";
  a4.style.fill = "transparent";
  bottom.style.fill = "black";
  b1.setAttribute("stroke-width", "0px");
  b2.setAttribute("stroke-width", "0px");
  b3.setAttribute("stroke-width", "0px");
  b4.setAttribute("stroke-width", "0px");
  a1.setAttribute("stroke-width", "0px");
  a2.setAttribute("stroke-width", "0px");
  a3.setAttribute("stroke-width", "0px");
  a4.setAttribute("stroke-width", "0px");
  const element = bottom;
  element.classList.add("animated", "slideInUp");
  element.addEventListener("animationend", () => {
    b1.setAttribute("stroke-width", "2px");
    b1.classList.add("dash");
    createEventlisteners();
  });
}

function test(bulb, arrow, box, nybulb, containerVar) {
  bulb.style.fill = "blue";
  arrow.setAttribute("stroke-width", "2px");
  arrow.classList.add("dash");

  gallery(pictureVar, containerVar, "img");
  text(textVar, box, "p");
  arrow.addEventListener("animationend", () => {
    box.style.display = "flex";
    if (counter == 0 || counter == 2) {
      box.classList.add("animated", "slideInLeft");
    } else {
      box.classList.add("animated", "slideInRight");
    }
    box.addEventListener("animationend", () => {
      nybulb.setAttribute("stroke-width", "2px");
      nybulb.classList.add("dash");
      bulb.removeEventListener("click", tis);
      nybulb.addEventListener("click", tis);
      counter++;
      console.log(counter);
      if (counter == 4) {
        document.querySelector(".l-container").classList.add("animated", "zoomOut");
      }
    });
  });
}

function createEventlisteners() {
  console.log("create eventlsiterne");
  b1.addEventListener("click", tis);
}

function tis() {
  if (counter == 0) {
    pictureVar = data1;
    containerVar = document.querySelector(".box1 .icon-container");
    console.log(containerVar);
    test(b1, a1, box1, b2, containerVar);
  } else if (counter == 1) {
    containerVar = document.querySelector(".box2 .icon-container");
    pictureVar = data2;
    test(b2, a2, box2, b3, containerVar);
  } else if (counter == 2) {
    containerVar = document.querySelector(".box3 .icon-container");
    pictureVar = data3;
    test(b3, a3, box3, b4, containerVar);
  } else if (counter == 3) {
    containerVar = document.querySelector(".box4 .icon-container");
    pictureVar = data4;
    test(b4, a4, box4, b4, containerVar);
  }
}

// sæt box til farve, tegn pil, animate box, tegn ny box.
