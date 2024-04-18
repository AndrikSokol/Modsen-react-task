async function fetchAndProcessData() {
  try {
    const response = await fetch("https://data");
    if (!response.ok) {
      throw new Error("Failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    return "error while fetching data";
  }
}
