const isInt = (number) => {
  if (!Number.isInteger(number)) throw TypeError("must be integer");
};

try {
  isInt(5.24);
} catch (error) {
  console.log(error.message);
}
