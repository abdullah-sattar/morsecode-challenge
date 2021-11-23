import { translateMorse, object } from "./translator.js"

let english = document.querySelector("#english");
let morse = document.querySelector("#morse");
let translateBtn = document.querySelector(".translate");


const translateMorse = (msg) => {
   const createArray = msg.split("");
   const translateArray = createArray.map((e) => {
       return object[e];
   });
   return translateArray.join("");
};

const translateClick = translateBtn.addEventListener("click", () => {
    morse.value = translateMorse(english.value);
});

