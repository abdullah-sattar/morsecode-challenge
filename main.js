//import the translateMorse function
import { translateMorse, object } from "./translator.js"

//select the html elements via queryselectors
let english = document.querySelector("#english");
let morse = document.querySelector("#morse");
let translateBtn = document.querySelector(".translate");

//apply a click event to the translate button so that when the button is clicked
//it applies the translateMorse function to the english textarea and then displays 
//the translation in the morse textarea
const translateClick = translateBtn.addEventListener("click", () => {
    morse.value = translateMorse(english.value);
});

