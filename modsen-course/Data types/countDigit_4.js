const countDigits = (number) => {
  let count = 0;

  while (number > 10) {
    number /= 10;
    count++;
  }
  return ++count;
};

console.log(countDigits(121));
console.log(countDigits(4));
console.log(countDigits(4324));
