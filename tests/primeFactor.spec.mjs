"use strict";

import { expect } from "chai";
import PrimeFactor from "../src/primeFactor.mjs";

describe("Testing PrimeFactor module functionality", () => {
  const primeFactor = new PrimeFactor();
  it("should return empty list for arguments that are less than 2", () => {
    expect(primeFactor.generate(1).length).to.equal(0);
  });

  it("should return [2] argument 2", () => {
    expect(primeFactor.generate(2).length).to.equal(1);
    expect(primeFactor.generate(2)[0]).to.equal(2);
  });

  it("should return [2, 2, 5, 5] argument 100", () => {
    expect(primeFactor.generate(100).length).to.equal(4);
    expect(primeFactor.generate(100)[0]).to.equal(2);
    expect(primeFactor.generate(100)[1]).to.equal(2);
    expect(primeFactor.generate(100)[2]).to.equal(5);
    expect(primeFactor.generate(100)[3]).to.equal(5);
  });
});
