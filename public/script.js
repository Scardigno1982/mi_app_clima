window.onload = function() {
    fetch('/clima')
    .then(response => response.json())
    .then(data => {
        document.getElementById('temp').innerText = (data.main.temp - 273.15).toFixed(2); // Convertir de Kelvin a Celsius
        document.getElementById('feels_like').innerText = (data.main.feels_like - 273.15).toFixed(2); // Convertir de Kelvin a Celsius
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('pressure').innerText = data.main.pressure;
        document.getElementById('humidity').innerText = data.main.humidity;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });
};
