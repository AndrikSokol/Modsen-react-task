"use strict";

const countOfVowels = (text) => {
  let count = 0;
  const vowels = "eyuioa";
  for (const char of text) {
    vowels.includes(char) && count++;
  }
  return count;
};

console.log(countOfVowels("hello all people"));
console.log(countOfVowels("wh"));
