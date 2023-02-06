export default class Prime {
  isNaturalFactor(num) {
    if (num == 0) return false;
    return num % 2 == 0 || num % 3 == 0 || num % 5 == 0;
  }

  calculatePrimes(num) {
    const output = [];
    if (num === 0) return output;
    for (let i = 1; i <= num; i++) {
      if (i === 1 || i === 2 || i === 3 || i === 5) {
        output.push(i);
      } else {
        const isNaturalFactor = this.isNaturalFactor(i);
        if (!isNaturalFactor) {
          output.push(i);
        }
      }
    }
    return output;
  }

  generateFactors(num) {
    const output = [];
    if (num < 2) {
      return output;
    }

    if (num === 2) {
      output.push(num);
      return output;
    }

    let index = 0;
    let quotient = num;
    const primes = this.calculatePrimes(num);

    while (quotient > 1) {
      let prime = primes[index];
      if (prime == 1) {
        index++;
      } else if (quotient % prime === 0) {
        quotient = quotient / prime;
        output.push(prime);
      } else {
        index++;
      }
    }
    return output;
  }
}
