// API URL

// INSERT API URL AND CODE HERE

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
    
    console.log(city);

    // ABOVE ALL WORKS, below does not work
    
    /*
    var liEl = document.createAttribute('div');
    liEl.textContent = cityEl;
    
    cityWeatherEl.appendChild(liEl);
    */
}

cityForm.addEventListener('submit', getCity);