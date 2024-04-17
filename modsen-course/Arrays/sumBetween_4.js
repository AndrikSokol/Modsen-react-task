const sumBetween = (min, max, arr) => {
  return arr.reduce(
    (acc, curr) => (curr < max && curr > min ? acc + curr : acc),
    (initialValue = 0)
  );
};

console.log(sumBetween(0, 10, [1, 4, 0, -10, 10, 5, 2]));
