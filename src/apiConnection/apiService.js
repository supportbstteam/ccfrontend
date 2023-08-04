// apiService.js
const API_BASE_URL = 'https://json-server-vercel-ashy.vercel.app/api'; // Replace with your API base URL

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
