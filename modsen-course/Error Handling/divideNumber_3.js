function divideNumber(a, b) {
  if (b === 0) {
    throw new Error("second prop is null");
  }
  return a / b;
}

try {
  console.log(divideNumber(5, 3));
  console.log(divideNumber(1, 0));
} catch (error) {
  console.error(error.message);
}
