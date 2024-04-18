function generateRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(randomNumber);
      } else {
        reject(new Error(`${randomNumber} > 5`));
      }
    }, randomNumber * 1000);
  });
}

generateRandomNumber()
  .then((number) => {
    console.log("Generated number:", number);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
