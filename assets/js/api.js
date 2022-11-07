// API URL

// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// Form Box Variables
var cityForm = document.querySelector("#cityForm");
var cityEl = document.querySelector("#cityname");

// Results Box Variables
var cityWeatherEl = document.querySelector("#cityWeather");

// Search City Function
var getCity = function(event) {
    event.preventDefault();

    var cityName = cityEl.value.trim();
    console.log(cityName);

    cityWeather(cityName);

    cityEl.value = "";
};

// Display City Results
var cityWeather = function(city) {
    
    var liEl = document.createAttribute('li');
    liEl.textContent = city;
    
    cityWeatherEl.appendChild(liEl);
}

cityForm.addEventListener('submit', getCity);