/* eslint-disable no-unused-vars */
const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;
async function getWeatherByLocation(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}`,
    );
    const data = await response.json();
    return { resStatus: true, weather: data };
  } catch (_) {
    return { resStatus: false, error: "Error fetching weather data" };
  }
}

export default getWeatherByLocation;
