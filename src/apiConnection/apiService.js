// apiService.js
const API_BASE_URL = 'http://teamwebdevelopers.com/charge_construct/api'; // Replace with your API base URL

export async function fetchData(endpoint) {
   const response = await fetch(`${API_BASE_URL}${endpoint}`);
   return await response.json();
  /*
  try {
   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  */
}
