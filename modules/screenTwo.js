const HTML = {};

const Facts = {
  header: "",
  icon: "",
  content: "",
  number: "",
  color: "",
  lineColor: ""
};

export function delegationTwo() {
  console.log("delegationTwo");
  globalVars();
  loadJson();
  loadPics();
}

function globalVars() {
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
    svgEventListners();
  }
}

function fetchInfo() {
  console.log("fetchList");
  document.querySelectorAll("circle").forEach(bullet => {
    console.log("circle");
    bullet.addEventListener("click", infoBox);
  });
  document.querySelectorAll(".article_container").forEach(icon => {
    console.log("circle");
    icon.addEventListener("click", infoBox);
  });
}

function svgEventListners() {
  const svg = document.querySelector(".lisaSvg");
  document.querySelector(".secondNext").addEventListener("click", function() {
    svg.classList = "lisaSvg";
    loadAnimations();
  });
  document.querySelector(".thirdBack").addEventListener("click", function() {
    setTimeout(() => {
      svg.classList.add("active");
      HTML.headerTwo.textContent = "Electricity";
      HTML.headerTwo.classList.add("bounceInL");
      HTML.headerTwo.classList.remove("bounceOutL");
    }, 1000);
    loadAnimations();
  });
}

function loadAnimations() {
  console.log("loadAnimations");
  const header1 = document.querySelector(".header1");
  const ikon1 = document.querySelector(".ikon1");
  const cirkel1 = document.querySelector(".cirkel1");
  document.querySelectorAll("circle").forEach(circle => {
    circle.style.fill = "transparent";
  });
  cirkel1.style.fill = "red";
  cirkel1.style.stroke = "red";
  ikon1.classList.add("flipInXL");
  header1.classList.remove("invisible");
  header1.classList.add("pulseL");
  header1.textContent = "Electricity";
  HTML.headerTwo.textContent = "";
  ikon1.style.filter = "none";
  document.querySelector(".start_ikon").addEventListener("click", startTimeline);
  removeAnimation();
}

function startTimeline() {
  console.log("click_container klik");
  const svg = document.querySelector(".lisaSvg");
  document.querySelector(".click_container").classList.add("fadeOutL");
  svg.classList.add("active");
  setTimeout(() => {
    console.log("click_container hide");
    document.querySelector(".click_container").classList.remove("fadeOutL");
    document.querySelector(".click_container").classList.add("hide");
  }, 500);
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
      headerObject.classList.add("pulseL");
      headerObject.textContent = fact.header;
      HTML.headerTwo.classList.add("bounceOutL");
      HTML.textTwo.classList.add("fadeOutL");
      iconObject.classList.add("flipOutXL");
      document.querySelector(".lisaSvg").classList.add(fact.lineColor);
      setTimeout(() => {
        iconObject.classList.remove("flipOutXL");
        HTML.textTwo.classList.remove("fadeOutL");
        HTML.headerTwo.classList.add("bounceInL");
        HTML.headerTwo.classList.remove("bounceOutL");
        HTML.headerTwo.textContent = fact.header;
        HTML.textTwo.innerHTML = fact.content;
        HTML.textTwo.classList.add("fadeInL");
        iconObject.style.filter = "none";
        iconObject.classList.add("flipInXL");
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
  HTML.headerTwo.classList.remove("bounceInL");
  HTML.textTwo.classList.remove("fadeInL");
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
