export function targetScreen() {
  console.log("targetSceen start");
  document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function(event) {
      let parent = event.target.parentNode.classList;
      const theClass = event.target.classList[0];
      parent.add("fadeOut");
      setTimeout(() => {
        parent.add("hide");
        parent.remove("fadeOut");
      }, 500);
      if (theClass == "next") {
        const newClass = ShowNextScreen();
        setClasses(newClass);
      }
      if (theClass == "back") {
        const newClass = ShowPrevScreen();
        setClasses(newClass);
      }
      if (theClass == "home") {
        setTimeout(() => {
          window.location.reload(true);
        }, 500);
      }
    });
  });
}

function ShowNextScreen() {
  console.log("setClassNames");
  const className = event.target.parentNode.classList[0];
  console.log(event.target.parentNode.classList[0]);
  const newClass = "." + className + "I";
  console.log("." + className + "I");
  return newClass;
}

function ShowPrevScreen() {
  const className = event.target.parentNode.classList[0];
  const subClass = className.substring(className.indexOf(" "), className.length - 1);
  const newClass = "." + subClass;
  return newClass;
}

function setClasses(newClass) {
  setTimeout(() => {
    document.querySelector(newClass).classList.remove("hide");
    document.querySelector(newClass).classList.add("fadeIn");
  }, 500);
  setTimeout(() => {
    document.querySelector(newClass).classList.remove("fadeIn");
  }, 1000);
}
