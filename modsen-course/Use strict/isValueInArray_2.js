"use strict";

const isValueInArray = (array, value) => {
  return array.includes(value);
};

console.log(isExistValue([2, 4, 8, 10], 2));
console.log(isExistValue([2, 4, 8, 10], 3));

console.log(isExistValue(["hi", 4, 8, 10], "hi"));
