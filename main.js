import { translateMorse, object } from "./translator.js"

let english = document.querySelector("#english");
let morse = document.querySelector("#morse");
let translateBtn = document.querySelector(".translate");

const translateClick = translateBtn.addEventListener("click", () => {
    morse.value = translateMorse(english.value);
});

