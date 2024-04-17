const minValue = (arr) => arr.sort((a, b) => a - b)[0];

console.log(minValue([2, 4, 10, -10, 5, 2]));
