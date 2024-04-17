const functionScope = () => {
  //   console.log(x);
  const f = () => {
    let x = 4;
  };

  //   console.log(y);
  const f2 = () => {
    const y = 1;
  };

  //   console.log(z);
  const f3 = () => {
    var z = 1;
  };
};

functionScope();
