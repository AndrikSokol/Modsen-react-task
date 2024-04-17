const loopScope = () => {
  for (let i = 0; i < 1; i++) {}
  //   console.log(i);

  for (const y = []; y.length < 1; y.push(1)) {}
  //   console.log(y);

  for (var z = 0; z < 1; z++) {}
  console.log(z);
};

loopScope();
