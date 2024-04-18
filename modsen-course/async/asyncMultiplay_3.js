async function fetchDataFromMultipleServers(urls) {
  try {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    });

    const results = await Promise.all(promises);

    return results;
  } catch (error) {
    console.error("Failed to fetch data from multiple servers:", error.message);
    throw error;
  }
}

async function main() {
  const urls = [
    "https://api.coinbase.com/v2/prices/ETH-USD/buy",
    "https://api.coinbase.com/v2/prices/ETH-USD/buy",
    "https://api.coinbase.com/v2/prices/ETH-USD/buy"
  ];

  try {
    const data = await fetchDataFromMultipleServers(urls);
    console.log("Data from multiple servers:", data);
  } catch (error) {
    console.error("Failed to fetch data from multiple servers:", error.message);
  }
}

main();
