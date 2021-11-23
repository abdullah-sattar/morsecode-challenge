import { translateMorse } from "./translator.js";
import { it, expect } from '@jest/globals';
import { describe } from "yargs";


it("it should translate a to .- ", () => {
    const result = translateMorse("a");
    expect(result).toBe(".- ");
});

it("it should translate b to -... ", () => {
    const result = translateMorse("b");
    expect(result).toBe("-... ");
});

it("it should translate c to -.-. ", () => {
    const result = translateMorse("c");
    expect(result).toBe("-.-. ");
});

it("it should translate d to -.. ", () => {
    const result = translateMorse("d");
    expect(result).toBe("-.. ");
});

it("it should translate e to . ", () => {
    const result = translateMorse("e");
    expect(result).toBe(". ");
});

it("it should translate f to ..-. ", () => {
    const result = translateMorse("f");
    expect(result).toBe("..-. ");
});

it("it should translate g to --. ", () => {
    const result = translateMorse("g");
    expect(result).toBe("--. ");
});

it("it should translate h to .... ", () => {
    const result = translateMorse("h");
    expect(result).toBe(".... ");
});

it("it should translate i to .. ", () => {
    const result = translateMorse("i");
    expect(result).toBe(".. ");
});

it("it should translate j to .--- ", () => {
    const result = translateMorse("j");
    expect(result).toBe(".--- ");
});

it("it should translate k to -.- ", () => {
    const result = translateMorse("k");
    expect(result).toBe("-.- ");
});

it("it should translate l to .-.. ", () => {
    const result = translateMorse("l");
    expect(result).toBe(".-.. ");
});

it("it should translate m to -- ", () => {
    const result = translateMorse("m");
    expect(result).toBe("-- ");
});

it("it should translate n to -. ", () => {
    const result = translateMorse("n");
    expect(result).toBe("-. ");
});

it("it should translate o to --- ", () => {
    const result = translateMorse("o");
    expect(result).toBe("--- ");
});

it("it should translate p to .--. ", () => {
    const result = translateMorse("p");
    expect(result).toBe(".--. ");
});

it("it should translate q to --.- ", () => {
    const result = translateMorse("q");
    expect(result).toBe("--.- ");
});

it("it should translate r to .-. ", () => {
    const result = translateMorse("r");
    expect(result).toBe(".-. ");
});

it("it should translate s to ... ", () => {
    const result = translateMorse("s");
    expect(result).toBe("... ");
});

it("it should translate t to - ", () => {
    const result = translateMorse("t");
    expect(result).toBe("- ");
});

it("it should translate u to ..- ", () => {
    const result = translateMorse("u");
    expect(result).toBe("..- ");
});

it("it should translate v to ...- ", () => {
    const result = translateMorse("v");
    expect(result).toBe("...- ");
});

it("it should translate w to .-- ", () => {
    const result = translateMorse("w");
    expect(result).toBe(".-- ");
});

it("it should translate x to -..- ", () => {
    const result = translateMorse("x");
    expect(result).toBe("-..- ");
});

it("it should translate y to -.-- ", () => {
    const result = translateMorse("y");
    expect(result).toBe("-.-- ");
});

it("it should translate z to --.. ", () => {
    const result = translateMorse("z");
    expect(result).toBe("--.. ");
});

it("it should translate hello to .... . .-.. .-.. --- ", () => {
    const result = translateMorse("hello");
    expect(result).toBe(".... . .-.. .-.. --- ");
});

it("it should translate good morning to --. --- --- -.. / -- --- .-. -. .. -. --. ", () => {
    const result = translateMorse("good morning");
    expect(result).toBe("--. --- --- -.. / -- --- .-. -. .. -. --. ");
});

