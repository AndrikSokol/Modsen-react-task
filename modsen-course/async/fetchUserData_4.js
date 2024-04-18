async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api/users/${userId}`);

    if (!response.ok) {
      throw new Error("Failed");
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
