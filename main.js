import { object, translate } from "./translator.js"

const translateMorse = (msg) => {
   const createArray = msg.split("");
   const translateArray = createArray.map((e) => {
       return object[e];
   });
   return translateArray;
};

console.log(translateMorse("hello")); 

