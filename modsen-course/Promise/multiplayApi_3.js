function multiplayApi(apiUrls) {
  const promises = apiUrls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            reject(new Error(`Error${url}`));
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  return Promise.all(promises)
    .then((results) => {
      const combinedData = results.reduce((acc, data) => {
        return { ...acc, ...data };
      }, {});
      return combinedData;
    })
    .catch((error) => {
      throw error;
    });
}

const apiUrls = ["https://api.coinbase.com/v2/prices/ETH-USD/buy"];
multiplayApi(apiUrls)
  .then((combinedData) => {
    console.log(combinedData);
  })
  .catch((error) => {
    console.error(error);
  });
