function delay(callback) {
  setTimeout(callback, 2000);
}

function callback() {
  console.log("Callback");
}

delay(callback);
