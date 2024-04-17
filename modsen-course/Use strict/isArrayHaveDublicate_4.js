"use strict";

const isArrayHaveDublicate = (array) => {
  const sortArray = array.sort((a, b) => a - b);

  for (let i = 1; i < sortArray.length; i++) {
    if (sortArray[i - 1] == sortArray[i]) {
      return true;
    }
  }
  return false;
};

console.log(isArrayHaveDublicate([1, 2, 3, 10, 4]));
console.log(isArrayHaveDublicate([4, 2, 5, 10, 2, 8]));
