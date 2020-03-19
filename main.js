import "@babel/polyfill";
import { screenTwo } from "./modules/screenTwo";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  screenTwo();
}
