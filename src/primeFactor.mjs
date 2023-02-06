"use strict";

const isNaturalFactor = (num) => {
  return num % 2 == 0 || num % 3 == 0 || num % 5 == 0;
};

const calculatePrimes = (num) => {
  const primes = [];
  for (let i = 1; i <= num; i++) {
    if (i == 1 || i == 2 || i == 3 || i == 5) {
      primes.push(i);
    } else {
      if (!isNaturalFactor(i)) {
        primes.push(i);
      }
    }
  }
  return primes;
};

class PrimeFactor {
  constructor() {}

  generate(num) {
    const primes = calculatePrimes(num);
    const output = [];
    let index = 0;
    let quotient = num;
    while (quotient > 1) {
      const prime = primes[index];
      if (prime == 1) {
        index++;
      } else {
        if (quotient % prime == 0) {
          quotient = quotient / prime;
          output.push(prime);
        } else {
          index++;
        }
      }
    }
    return output;
  }
}

export default PrimeFactor;
