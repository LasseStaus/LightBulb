import { gallery as pictures, settings } from "./modules/gallery";

document.querySelector("h1").textContent = settings.author;

const data = [{ i: "1.png" }, { i: "2.png" }];

pictures(data, document.body);
