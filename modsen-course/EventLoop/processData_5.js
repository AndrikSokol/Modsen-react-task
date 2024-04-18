function processData(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== "number") {
      reject(new Error("Error"));
    } else {
      setTimeout(() => {
        if (data % 2 !== 0) {
          resolve("Odd");
        } else {
          setTimeout(() => {
            resolve("Even");
          }, 2000);
        }
      }, 1000);
    }
  });
}
