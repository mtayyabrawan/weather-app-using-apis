/* eslint-disable no-unused-vars */
const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;
async function getWeatherByCity(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${weather_api_key}`,
    );
    const data = await response.json();
    return { resStatus: true, weather: data };
  } catch (_) {
    return { resStatus: false, error: "Error fetching weather data" };
  }
}

export default getWeatherByCity;
