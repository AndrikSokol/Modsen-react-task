const asyncOperation = () => {
  promise1
    .then((res) => {
      console.log(res);
      return res.name;
    })
    .then((name) => console.log(name));
};

const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve({ name: "andrik" }), 2000;
  })
);

asyncOperation();
