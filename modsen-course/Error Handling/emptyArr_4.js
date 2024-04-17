const emptyArr = () => {
  if (arr.length === 0) {
    throw new Error("Массив пуст!");
  }
};

try {
  emptyArr([]);
} catch (error) {
  console.log(error.message);
}
