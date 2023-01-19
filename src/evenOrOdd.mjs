"use strict";

export const RESULT = {
  EVEN: "EVEN",
  ODD: "ODD",
};

const isEvenOrOdd = (number) => {
  if (number === 0) return RESULT.ODD;
  return number % 2 === 0 ? RESULT.EVEN : RESULT.ODD;
};

export default isEvenOrOdd;
