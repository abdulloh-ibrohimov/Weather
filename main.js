function Getweather() {
    let searchBar = document.querySelector('.search-bar').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar}&appid=2656f1de0d7efc073ccc0bf2cc80d41d&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let temp = document.querySelector('.temp');
            temp.innerHTML = `${Math.round(data.main.temp)} <sup>o</sup>C`;

            let city = document.querySelector('.city');
            city.textContent = searchBar;

            let details = document.querySelector('.details');
            details.innerHTML = `Макс: ${Math.round(data.main.temp_max)}°C, Мин: ${Math.round(data.main.temp_min)}°C`;
            
            let weatherIcon = document.querySelector('.weather-icon');
            let weatherCondition = data.weather[0].main.toLowerCase();
            
            switch (weatherCondition) {
                case 'clear':
                    weatherIcon.textContent = '☀️'; // Ясно
                    break;
                case 'clouds':
                    weatherIcon.textContent = '☁️'; // Облачно
                    break;
                case 'rain':
                    weatherIcon.textContent = '🌧️'; // Дождь
                    break;
                case 'thunderstorm':
                    weatherIcon.textContent = '⛈️'; // Гроза
                    break;
                case 'snow':
                    weatherIcon.textContent = '❄️'; // Снег
                    break;
                case 'mist':
                case 'fog':
                    weatherIcon.textContent = '🌫️'; // Туман
                    break;
                default:
                    weatherIcon.textContent = '🌦️'; // Переменная облачность
            }
        })
        .catch(error => console.error("Ошибка при получении данных:", error));
}

 