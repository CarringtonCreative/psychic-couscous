import { expect } from "chai";
import isEvenOrOdd, { RESULT } from "../src/evenOrOdd.mjs";

describe("test if a number even or odd", () => {
  it("should export 'isEvenOrOdd' function", () => {
    expect(isEvenOrOdd).to.be.a("function");
  });

  it("should never return undefined", () => {
    const testee = isEvenOrOdd;
    const result = testee(0);
    expect(result).not.to.be.undefined;
  });

  it("should return 'odd' for 0", () => {
    const testee = isEvenOrOdd;
    const result = testee(0);
    expect(result).to.be.equal(RESULT.ODD);
  });

  it("should return 'odd' for 1", () => {
    const testee = isEvenOrOdd;
    const result = testee(1);
    expect(result).to.be.equal(RESULT.ODD);
  });

  it("should return 'even' for 2", () => {
    const testee = isEvenOrOdd;
    const result = testee(2);
    expect(result).to.be.equal(RESULT.EVEN);
  });
});
