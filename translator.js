//create object that contains translation data where the keys are the english
//alphabet and the values are morse code
export const object = {
    a: ".- ",
    b: "-... ",
    c: "-.-. ",
    d: "-.. ",
    e: ". ",
    f: "..-. ",
    g: "--. ",
    h: ".... ",
    i: ".. ",
    j: ".--- ",
    k: "-.- ",
    l: ".-.. ",
    m: "-- ",
    n: "-. ",
    o: "--- ",
    p: ".--. ",
    q: "--.- ",
    r: ".-. ",
    s: "... ",
    t: "- ",
    u: "..- ",
    v: "...- ",
    w: ".-- ",
    x: "-..- ",
    y: "-.-- ",
    z: "--.. ",
    " ": "/ "
}

//create a function that takes english as a parameter and returns morse code
export const translateMorse = (msg) => {
    //create a variable that performs a split method on the english string putting
    //the sub-strings into an array 
    const createArray = msg.split("");
    //create a variable that performs a map of the createArray variable and for each
    //element translates the english letter into morse using the data from the object
    const translateArray = createArray.map((e) => {
        return object[e];
    });
    //use the join method to turn translateArray back into a string and return
    return translateArray.join("");
 };