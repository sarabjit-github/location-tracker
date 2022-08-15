console.log("script running");

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      // userLocation = position;
      const { latitude, longitude } = position.coords;
      let url = `https://us1.locationiq.com/v1/reverse?key=pk.e1d756551237320c6a5c07314adf128d&lat=${latitude}&lon=${longitude}&format=json`;
      let res = await fetch(url);
      let data = await res.json();
      document.getElementById("loader").classList.remove("active");
      const { country, city, state } = data.address;

      document.getElementById(
        "main-location"
      ).innerHTML = `<h3>${data.display_name}</h3>`;
      document.getElementById("city").innerText = `${city}`;
      document.getElementById("country").innerText = `${country}`;
      document.getElementById("state").innerText = `${state}`;
      document.getElementById("location-container").style.display = 'block';
    });
  }else{
    document.getElementById(
      "main-location"
    ).innerHTML = `<h3>Denied</h3>`;
    document.getElementById("location-container").style.display = 'block';
  }
}
// getUserLocation();

window.addEventListener("load", () => {
  document.getElementById("loader").classList.remove("active");
});
