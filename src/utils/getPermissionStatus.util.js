/* eslint-disable no-unused-vars */
async function getPermissionStatus() {
  try {
    const status = await navigator.permissions.query({ name: "geolocation" });
    return { resStatus: true, state: status.state };
  } catch (_) {
    return { resStatus: false, error: "Error fetching permission status" };
  }
}

export default getPermissionStatus;
