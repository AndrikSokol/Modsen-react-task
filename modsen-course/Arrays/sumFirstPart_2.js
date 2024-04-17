const sumFirstPart = (arr) => {
  return arr.reduce((acc, curr, index) => {
    if (index + 1 > arr.length / 2) {
      return acc;
    }
    return acc + curr;
  }, (initialValue = 0));
};

console.log(sumFirstPart([4, 2, 10, 12, 5, 2]));
console.log(sumFirstPart([4]));
console.log(sumFirstPart([4, 2, 10]));
