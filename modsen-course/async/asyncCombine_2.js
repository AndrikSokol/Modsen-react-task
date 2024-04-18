async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error while fetching data from ${url}: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchMultipleServers(firstUrl, secondUrl) {
  try {
    const firstData = await fetchData(firstUrl);
    console.log("First data:", firstData);

    const secondData = await fetchData(secondUrl + firstData.someParameter);
    console.log("Second data:", secondData);

    return secondData;
  } catch (error) {
    console.error("Failed", error.message);
    throw error;
  }
}

const firstApiUrl = "";
const secondApiUrl = "";

(async () => {
  try {
    const result = await fetchMultipleServers(firstApiUrl, secondApiUrl);
    console.log(result);
  } catch (error) {
    console.error("Failed:", error.message);
  }
})();
