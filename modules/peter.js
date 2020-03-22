export async function start() {
  let response = await fetch("globe.svg");
  let mySvgData = await response.text();
  document.querySelector("body").innerHTML = mySvgData;
}
