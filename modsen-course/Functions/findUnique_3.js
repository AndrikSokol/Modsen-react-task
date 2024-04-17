const findUnique = (obj) => {
  if (Array.isArray(obj)) {
    const arr = obj;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr.lastIndexOf(arr[i])) {
        return arr[i];
      }
    }
  }
};

console.log(findUnique([2, 4, 10, 16, 2, 10]));
