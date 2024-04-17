function refError() {
  try {
    console.log(undefinedVariable);
  } catch (error) {
    console.error("Ошибка: ", error.message);
  }
}

refError();
