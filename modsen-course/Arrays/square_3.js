const square = (arr) => {
  return arr.reduce((acc, curr) => acc + Math.pow(curr, 2), (initialValue = 0));
};

console.log(square([2, 4, 8]));
console.log(square([2, 8]));
