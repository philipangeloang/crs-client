import axios from "axios";

export async function logout() {
  const apiUrl = "https://13.229.75.4/api/logout";

  try {
    axios.post(
      apiUrl,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true /* Necessary for storing cookies */,
      }
    );
  } catch (error) {
    console.error("API request error:", error);
  } finally {
    window.location.href = "/";
  }
}
