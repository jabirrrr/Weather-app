async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "52f84b0b920a7d2a38b362d14bdfbb00";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${err.message}</p>`;
  }
}