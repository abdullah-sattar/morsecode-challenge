# Morse Code Translator

![Translator](C:\Users\abdul_000\Documents\coursework\morseCode-challenge\Capture.PNG)
## The Design
I took a mobile-first approach with the aim of creating a responsive design. The design is fairly simplistic with two textarea elements, a translate button and a title. I applied flexbox on the container arranging the items in a column while being centred on the page.

## The Code
A testing driven approach was used in this project where the function was created in a unit-testing environment, and once confirmed that the function works it was exported and imported into the main JS file.

The translateMorse function uses a split on the english language string to form a new array that consists of sub-strings.

This new array - createArray - then undergoes a map method where each element (english letters) is translated into morse using data from the object. Following this a join method is applied to transform the translated array back into a string.

A click event is added to the translate button which takes the innnerHTML of the english textarea, applies the translateMorse function to it and then displays it in the morse textarea.