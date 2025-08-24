/* eslint-disable no-unused-vars */
async function getLocationByIP(ip) {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    return {
      resStatus: true,
      location: { longitude: data.longitude, latitude: data.latitude },
    };
  } catch (_) {
    return { resStatus: false, error: "Error fetching location" };
  }
}

export default getLocationByIP;
