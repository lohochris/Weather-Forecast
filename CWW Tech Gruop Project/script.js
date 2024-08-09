async function getWeather() {
    const apiKey = '1ee16a0b23c860a890afdfdc387a3e49'; // Replace with your OpenWeatherMap API key
    const location = document.getElementById('locationInput').value;

    if (!location) {
        alert('Please enter a location');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert('Location not found');
            return;
        }

        const weatherDisplay = document.getElementById('weatherDisplay');
        weatherDisplay.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to retrieve weather data. Please try again.');
    }
}
