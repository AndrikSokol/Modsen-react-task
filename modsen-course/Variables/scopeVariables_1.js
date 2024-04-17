const scopeVariables = () => {
  // console.log("upper scope " + x);
  {
    let x = 2;
    console.log("in scope " + x);
  }
  // console.log("out of scope " + x);

  console.log("upper scope " + y);
  {
    var y = 4;
    console.log("in scope " + y);
  }
  console.log("out of scope " + y);

  // console.log("upper scope " + z);
  {
    const z = "a";
    console.log("in scope " + z);
  }
  // console.log("out of scope " + z);
};
scopeVariables();
