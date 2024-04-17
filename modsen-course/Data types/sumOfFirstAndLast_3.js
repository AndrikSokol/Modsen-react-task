const sumOfFirstAndLast = (number) => {
  if (number < 10) {
    return number;
  }

  let first;
  let last = number % 10;
  while (number > 10) {
    number /= 10;
  }
  first = Number.parseInt(number);

  return first + last;
};

console.log(sumOfFirstAndLast(121));
console.log(sumOfFirstAndLast(4));
console.log(sumOfFirstAndLast(524));
console.log(sumOfFirstAndLast(10467));
