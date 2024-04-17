const intervalFunc = (delay, callback) => {
  setInterval(callback, delay);
};

intervalFunc(100, () => {
  console.log("hi");
});
