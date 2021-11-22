import { translate } from "./translator.js";
import { it, expect } from '@jest/globals';
import { describe } from "yargs";


it("it should translate a to .-", () => {
    const result = translate("a");
    expect(result).toBe(".-");
});

it("it should translate b to -...", () => {
    const result = translate("b");
    expect(result).toBe("-...");
});

it("it should translate c to -.-.", () => {
    const result = translate("c");
    expect(result).toBe("-.-.");
});

it("it should translate d to -..", () => {
    const result = translate("d");
    expect(result).toBe("-..");
});

it("it should translate e to .", () => {
    const result = translate("e");
    expect(result).toBe(".");
});

it("it should translate f to ..-.", () => {
    const result = translate("f");
    expect(result).toBe("..-.");
});

it("it should translate g to --.", () => {
    const result = translate("g");
    expect(result).toBe("--.");
});

it("it should translate h to ....", () => {
    const result = translate("h");
    expect(result).toBe("....");
});

it("it should translate i to ..", () => {
    const result = translate("i");
    expect(result).toBe("..");
});

it("it should translate j to .---", () => {
    const result = translate("j");
    expect(result).toBe(".---");
});

it("it should translate k to -.-", () => {
    const result = translate("k");
    expect(result).toBe("-.-");
});

it("it should translate l to .-..", () => {
    const result = translate("l");
    expect(result).toBe(".-..");
});

it("it should translate m to --", () => {
    const result = translate("m");
    expect(result).toBe("--");
});

it("it should translate n to -.", () => {
    const result = translate("n");
    expect(result).toBe("-.");
});

it("it should translate o to ---", () => {
    const result = translate("o");
    expect(result).toBe("---");
});

it("it should translate p to .--.", () => {
    const result = translate("p");
    expect(result).toBe(".--.");
});

it("it should translate q to --.-", () => {
    const result = translate("q");
    expect(result).toBe("--.-");
});

it("it should translate r to .-.", () => {
    const result = translate("r");
    expect(result).toBe(".-.");
});

it("it should translate s to ...", () => {
    const result = translate("s");
    expect(result).toBe("...");
});

it("it should translate t to -", () => {
    const result = translate("t");
    expect(result).toBe("-");
});

it("it should translate u to ..-", () => {
    const result = translate("u");
    expect(result).toBe("..-");
});

it("it should translate v to ...-", () => {
    const result = translate("v");
    expect(result).toBe("...-");
});

it("it should translate w to .--", () => {
    const result = translate("w");
    expect(result).toBe(".--");
});

it("it should translate x to -..-", () => {
    const result = translate("x");
    expect(result).toBe("-..-");
});
it("it should translate y to -.--", () => {
    const result = translate("y");
    expect(result).toBe("-.--");
});
it("it should translate z to --..", () => {
    const result = translate("z");
    expect(result).toBe("--..");
});

