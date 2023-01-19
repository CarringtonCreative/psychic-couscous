"use strict";

const reverseWords = (str) => {
  if (!str || undefined) return "";
  return str.split(" ").reverse().join(" ");
};

export default reverseWords;
