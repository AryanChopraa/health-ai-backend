const axios = require('axios');

// Replace with your actual Google Maps API Key
const apiKey = 'YOUR_API_KEY';

// Latitude and longitude of Delhi, India
const latitude = 28.6139;
const longitude = 77.209;

// Function to make a GET request to the Places API using Axios
async function getPlaces(radius) {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=electric_vehicle_charging_station&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Example usage
const radius = 5000; // Radius in meters (you can adjust this)

getPlaces(radius)
  .then((data) => {
    console.log('EV Charging Stations in Delhi:');
    data.results.forEach((station) => {
      console.log(`  - Name: ${station.name}`);
      console.log(`    Address: ${station.vicinity}`);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
