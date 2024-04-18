function squareAfterDelay(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number);
    }, 3000);
  });
}

Promise.resolve(2)
  .then(squareAfterDelay)
  .then(squareAfterDelay)
  .then(squareAfterDelay)
  .then((result) => {
    console.log("Результат:", result);
  });
