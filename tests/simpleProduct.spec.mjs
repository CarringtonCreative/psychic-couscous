"use strict";

import { expect } from "chai";
import simpleProduct from "../src/simpleProduct.mjs";

describe("Testing module for simpleProduct function", () => {
  it("should return O for argument 0", () => {
    const num = 0;
    expect(simpleProduct(num)).to.be.equal(0);
  });
  it("should return 9 for argument 1", () => {
    const num = 1;
    expect(simpleProduct(num)).to.be.equal(9);
  });
  it("should return 16 for argument 8", () => {
    const num = 2;
    expect(simpleProduct(num)).to.be.equal(16);
  });
});
