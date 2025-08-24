/* eslint-disable no-unused-vars */
async function getIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return { resStatus: true, ip: data.ip };
  } catch (_) {
    return { resStatus: false, error: "Error fetching IP" };
  }
}

export default getIP;
