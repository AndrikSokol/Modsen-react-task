function callbackToPromise(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

function callbackFunction(arg1, arg2, callback) {
  setTimeout(() => {
    if (arg1 && arg2) {
      callback(null, arg1 + arg2);
    } else {
      callback(new Error("Не хватает аргументов"));
    }
  }, 1000);
}

const promiseFunction = callbackToPromise(callbackFunction);

promiseFunction(2, 3)
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
