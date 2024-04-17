"use strict";
const catchError = () => {
  try {
    const obj = { surname: "sokol" };
    const name = obj.name;
    console.log(name);
  } catch (error) {
    if (error instanceof TypeError) console.log(error);
  }
};

catchError();
