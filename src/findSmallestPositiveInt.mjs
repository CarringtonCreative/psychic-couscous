"use strict";

/*
  Given a sorted array, find the smallest positive integer that is not the 
  sum of a the array. For example, for the input [1, 2, 3, 10], 
  you should return 4. Do this in O(N) time.
*/

export const findSmallestPositiveInteger = (nums) => {
  if (!nums || nums.length == 0) return 0;
  if (nums.length == 1) return nums[0] + 1;

  const sum = nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  let done = false;
  let counter = nums[0];
  while (!done) {
    counter++;
    if (nums.indexOf(counter) == -1 && counter != sum) {
      done = true;
      return counter;
    }
  }
  return counter;
};

export default findSmallestPositiveInteger;
