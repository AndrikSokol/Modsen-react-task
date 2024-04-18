async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const apiUrl = "https://api.coinbase.com/v2/prices/ETH-USD/buy";
fetchData(apiUrl)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Failed:", error.message);
  });
