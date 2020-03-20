export async function getSVG(data, parent) {
  const response = await fetch(data);
  const mySVG = await response.text();

  console.log(mySVG);
  parent.innerHTML = mySVG;

  createEventlisteners();
}

function createEventlisteners() {
  console.log("create eventlsiterne");
}
