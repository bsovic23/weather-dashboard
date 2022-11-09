// API URL

// INSERT API URL AND CODE HERE

// Search Form Variables
var cityForm = document.querySelector("#cityForm");
var cityEl = document.querySelector("#cityname");

var searchList = document.querySelector("#search-history-list");

// Weather Box Variables
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

// Display Search History - Cities
var cityWeather = function(city) {

    if (!citySearchHistory.length === 0) {
        citySearchHistory.push(city);
    } else {
        citySearchHistory.push(city);
    };

    console.log(citySearchHistory);

    divEl = document.createElement('div');
    pEl = document.createElement('p');
    pEl.textContent = city;
    pEl.setAttribute("style", "background-color: grey; color: pink; padding: 10px; text-align: center;");
    divEl.appendChild(pEl);
    searchList.appendChild(divEl);
}

cityForm.addEventListener('submit', getCity);

// Display the Search Term Weather
