const increase = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 1.1;
  }

  return arr;
};

console.log(increase([1, 2, 10, 40, 70, -20]));
