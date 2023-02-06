import { expect } from "chai";
import Prime from "../src/prime.mjs";

describe("Testing Prime Factor module functionality", () => {
  it("should return if a number is a natural factor", () => {
    const prime = new Prime();
    const result0 = prime.isNaturalFactor(0);
    const result1 = prime.isNaturalFactor(1);
    const result2 = prime.isNaturalFactor(2);
    const result3 = prime.isNaturalFactor(3);
    const result5 = prime.isNaturalFactor(5);
    expect(result0).to.equal(false);
    expect(result1).to.equal(false);
    expect(result2).to.equal(true);
    expect(result3).to.equal(true);
    expect(result5).to.equal(true);
  });

  it("should return all prime numbers under a specific number", () => {
    const prime = new Prime();
    const result0 = prime.calculatePrimes(0);
    const result1 = prime.calculatePrimes(1);
    const result2 = prime.calculatePrimes(2);
    const result3 = prime.calculatePrimes(3);
    const result4 = prime.calculatePrimes(5);
    const result5 = prime.calculatePrimes(10);
    expect(result0).to.deep.equal([]);
    expect(result1).to.deep.equal([1]);
    expect(result2).to.deep.equal([1, 2]);
    expect(result3).to.deep.equal([1, 2, 3]);
    expect(result4).to.deep.equal([1, 2, 3, 5]);
    expect(result5).to.deep.equal([1, 2, 3, 5, 7]);
  });

  it("should generate prime factors given number", () => {
    const prime = new Prime();
    const result0 = prime.generateFactors(0);
    const result1 = prime.generateFactors(1);
    const result2 = prime.generateFactors(2);
    const result3 = prime.generateFactors(5);
    const result4 = prime.generateFactors(100);
    expect(result0).to.deep.equal([]);
    expect(result1).to.deep.equal([]);
    expect(result2).to.deep.equal([2]);
    expect(result3).to.deep.equal([5]);
    expect(result4).to.deep.equal([2, 2, 5, 5]);
  });
});
