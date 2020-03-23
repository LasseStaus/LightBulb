let newClass;

export function targetScreen() {
  console.log("targetSceen start");
  document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function(event) {
      event.target.parentNode.classList.add("fadeOut");
      setTimeout(() => {
        event.target.parentNode.classList.add("hide");
        event.target.parentNode.classList.remove("fadeOut");
      }, 500);
      if (event.target.classList[0] == "next") {
        const newClass = ShowNextScreen();
        console.log(newClass);
        setTimeout(() => {
          document.querySelector(newClass).classList.remove("hide");
          document.querySelector(newClass).classList.add("fadeIn");
        }, 500);
        setTimeout(() => {
          document.querySelector(newClass).classList.remove("fadeIn");
        }, 1000);
      }
      if (event.target.classList[0] == "back") {
        const newClass = ShowPrevScreen();
        setTimeout(() => {
          document.querySelector(newClass).classList.remove("hide");
          document.querySelector(newClass).classList.add("fadeIn");
        }, 500);
        setTimeout(() => {
          document.querySelector(newClass).classList.remove("fadeIn");
        }, 1000);
      }
      if (event.target.classList[0] == "home") {
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
  document.querySelector(newClass).classList.remove("hide");
}
