"use strict";

import { expect } from "chai";
import Calculate from "../src/calculate.mjs";

describe("Testing module for Calculate data structure", () => {
  describe("Test calculate constructor", () => {
    const calculate = new Calculate();
    const data = calculate.data;
    it("should return an empty datastore", () => {
      expect(data).to.not.be.undefined;
      expect(data.length).to.be.equal(0);
    });
  });
  describe("Test calculate default values", () => {
    const calculate = new Calculate();
    it("should return 0 for calling mimimum with empty datastore", () => {
      expect(calculate.minimum()).to.be.equal(0);
    });
    it("should return 0 for calling maximum with empty datastore", () => {
      expect(calculate.maximum()).to.be.equal(0);
    });
    it("should return 0 for calling total with empty datastore", () => {
      expect(calculate.total()).to.be.equal(0);
    });
    it("should return 0 for calling average with empty datastore", () => {
      expect(calculate.average()).to.be.equal(0);
    });
  });
  describe("Test calculate minimal function", () => {
    it("should return 1 for calling minimum with [1, 2, 3]", () => {
      const calculate = new Calculate([1, 2, 3]);
      expect(calculate.minimum()).to.be.equal(1);
    });
    it("should return -1 for calling minimum with [-1, 0, 1]", () => {
      const calculate = new Calculate([-1, 0, 1]);
      expect(calculate.minimum()).to.be.equal(-1);
    });
    it("should return -3 for calling minimum with [-1, -2, -3]", () => {
      const calculate = new Calculate([-1, -2, -3]);
      expect(calculate.minimum()).to.be.equal(-3);
    });
  });
  describe("Test calculate maximum function", () => {
    it("should return 3 for calling maximum with [1, 2, 3]", () => {
      const calculate = new Calculate([1, 2, 3]);
      expect(calculate.maximum()).to.be.equal(3);
    });
    it("should return -1 for calling maximum with [-1, 0, 1]", () => {
      const calculate = new Calculate([-1, 0, 1]);
      expect(calculate.maximum()).to.be.equal(1);
    });
    it("should return -3 for calling maximum with [0, -1, -2, -3]", () => {
      const calculate = new Calculate([0, -1, -2, -3]);
      expect(calculate.maximum()).to.be.equal(0);
    });
  });
  describe("Test calculate total function", () => {
    it("should return 0 for calling total with []", () => {
      const calculate = new Calculate([]);
      expect(calculate.total()).to.be.equal(0);
    });
    it("should return 3 for calling total with [1, 2, 3]", () => {
      const calculate = new Calculate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(calculate.total()).to.be.equal(10);
    });
  });
  describe("Test calculate average function", () => {
    it("should return 0 for calling average with []", () => {
      const calculate = new Calculate([]);
      expect(calculate.average()).to.be.equal(0);
    });
    it("should return 2 for calling average with [1, 2, 3]", () => {
      const calculate = new Calculate([1, 2, 3]);
      expect(calculate.average()).to.be.equal(2);
    });
  });
});
