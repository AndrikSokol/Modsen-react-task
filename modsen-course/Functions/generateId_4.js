const generateId = (length) => {
  return Math.ceil(Math.random() * Math.pow(10, length));
};

console.log(generateId(5));
console.log(generateId(1));
console.log(generateId(8));
