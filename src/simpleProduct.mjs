"use strict";

const simpleProduct = (num) => {
  if (num === 0) return 0;
  return num % 2 === 0 ? num * 8 : num * 9;
};

export default simpleProduct;
