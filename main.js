import "@babel/polyfill";
import { screenTwo } from "./modules/screenTwo";
("use strict");
window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  screenTwo();
}
