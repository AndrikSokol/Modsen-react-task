function parallelLoad(urls) {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            reject(new Error(`error: ${url}`));
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  return Promise.all(promises);
}

const urls1 = [
  "https://napster2210.github.io/ngx-spinner/",
  "https://github.com/andrikSokol"
];

parallelLoad(urls1)
  .then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
