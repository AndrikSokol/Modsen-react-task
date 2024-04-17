const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const compareObjects = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }

      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!compareArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

const obj1 = { name: "andrey", county: "molo" };
const obj2 = { name: "andrey", county: "molo" };
console.log(compareObjects(obj1, obj2));

const obj3 = { name: "andrey", county: "molodechno" };
console.log(compareObjects(obj1, obj3));
