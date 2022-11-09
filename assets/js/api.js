// API URL

// INSERT API URL AND CODE HERE

// Form Box Variables
var cityForm = document.querySelector("#cityForm");
var cityEl = document.querySelector("#cityname");

// Results Box Variables
var cityWeatherEl = document.querySelector("#cityWeather");

// City Search History
citySearchHistory = [];

// Search City Function
var getCity = function(event) {
    event.preventDefault();

    var cityName = cityEl.value.trim();

    cityWeather(cityName);     

    cityEl.value = "";
};

// Display City Results
var cityWeather = function(city) {

    if (!citySearchHistory.length === 0) {
        citySearchHistory.push(city);
    } else {
        citySearchHistory.push(city);
    }

    console.log(citySearchHistory);
    /*
    for (i=0; i < citySearchHistory.length; i++) {
        // insert appending to the list below search history here
    }
    */
}

cityForm.addEventListener('submit', getCity);