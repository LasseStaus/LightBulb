export function targetScreen() {
  console.log("targetSceen start");
  document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function(event) {
      let parent = event.target.parentNode.classList;
      const theClass = event.target.classList[0];
      parent.add("fadeOutL");
      setTimeout(() => {
        parent.add("hide");
        parent.remove("fadeOutL");
      }, 500);
      if (theClass == "next") {
        const newClass = findNextScreen();
        displayScreen(newClass);
      }
      if (theClass == "back") {
        const newClass = findPrevScreen();
        displayScreen(newClass);
      }
      if (theClass == "home") {
        setTimeout(() => {
          window.location.reload(true);
        }, 500);
      }
    });
  });
}

function findNextScreen() {
  console.log("setClassNames");
  const className = event.target.parentNode.classList[0];
  console.log(event.target.parentNode.classList[0]);
  const newClass = "." + className + "I";
  console.log("." + className + "I");
  return newClass;
}

function findPrevScreen() {
  const className = event.target.parentNode.classList[0];
  const subClass = className.substring(className.indexOf(" "), className.length - 1);
  const newClass = "." + subClass;
  return newClass;
}

function displayScreen(newClass) {
  setTimeout(() => {
    document.querySelector(newClass).classList.remove("hide");
    document.querySelector(newClass).classList.add("fadeIn");
  }, 500);
  setTimeout(() => {
    document.querySelector(newClass).classList.remove("fadeIn");
  }, 1000);
}
