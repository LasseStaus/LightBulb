export function gallery(data, parent) {
  data.forEach(d => {
    const t = document.createElement("img");
    t.src = "imgs/" + d.i;
    parent.appendChild(t);
  });
}

function createElement(type) {
  return document.createElement(type);
}

test(a1);
export const settings = {
  meaning: 42,
  author: "peter panik"
};
