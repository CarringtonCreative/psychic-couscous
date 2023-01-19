"use strict";

import { expect } from "chai";
import reverseWords from "../src/reverseWords.mjs";

describe("Testing module for reverseWords function", () => {
  it("should return an empty string for ''", () => {
    const str = "";
    expect(reverseWords(str)).to.be.equal("");
  });
  it("should return 'One' for argument 'One'", () => {
    const str = "One";
    expect(reverseWords(str)).to.be.equal("One");
  });
  it("should return 'Three Two One' for argument 'One Two Three'", () => {
    const str = "One Two Three";
    expect(reverseWords(str)).to.be.equal("Three Two One");
  });

  it("should return 'battle no requires ...' for argument 'The greatest victory ...'", () => {
    const str = "The greatest victory is that which requires no battle";
    expect(reverseWords(str)).to.be.equal(
      "battle no requires which that is victory greatest The"
    );
  });
});
