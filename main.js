function getWeather() {
    const apiKey = 'f34e5deac12ed196e746f52e5dbd4724';
    const city = document.getElementById('cityInput').value;
    const weatherInfoContainer = document.getElementById('weatherInfo');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;

            const weatherInfoHTML = `<p>City: ${name}</p>
                                     <p>Temperature: ${temperature}°C</p>
                                     <p>Description: ${description}</p>`;

            weatherInfoContainer.innerHTML = weatherInfoHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfoContainer.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
        });
}
