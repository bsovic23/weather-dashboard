// API URL
var APIKey = "46be7341d47ff94911e8303130d2f7c0";

//var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon=" + lon + "&appid=" + APIKey;

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

    cityForecast(cityName);     

    cityEl.value = "";
};

// Function for finding city in API
var cityForecast = function(city) {
    var searchCity = city;

    var cityWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + APIKey;

    fetch(cityWeatherUrl).then(function(response) {
        response.json().then(function(data) {
          console.log(data);

          dataCity = data.name;
          dataLon = data.coord.lon;
          dataLat = data.coord.lat;

          console.log(dataCity, dataLon, dataLat);

          cityWeather(dataCity, dataLon, dataLat)
        });
      });
};

// Display Search History - Cities
var cityWeather = function(city, longitude, latitude) {

    if (!citySearchHistory.length === 0) {
        citySearchHistory.push(
            {
                "city": city,
                "longitude": longitude,
                "latitdue": latitude
             }
            );
    } else {
        citySearchHistory.push(
            {
                "city": city,
                "longitude": longitude,
                "latitdue": latitude
             }
            );
    };

    console.log(citySearchHistory);

    // Previous Search History
    divEl = document.createElement('div');
    pEl = document.createElement('p');
    pEl.textContent = city;
    pEl.setAttribute("style", "background-color: grey; color: pink; padding: 10px; text-align: center;");
    divEl.appendChild(pEl);
    searchList.appendChild(divEl);

    // Today weather history
    todayWeather(city, longitude, latitude);

    // Forecast weather history
    forecastWeather(city, longitude, latitude);
};

// Display the Search Term Weather

var todayWeather = function(city, longitude, latitude) {
    // First step of this function is clearing the previous boxes
    // OR if already blank and first search then it creates the boxes
    console.log(city, longitude, latitude);
    console.log("today function works properly!");
};

// Display the Forecast Weather for 5 days
var forecastWeather = function(city, longitude, latitude) {
    console.log(city, longitude, latitude);
    console.log("forecast function works properly!");
};



// Button that starts the entire search process
cityForm.addEventListener('submit', getCity);



// Function for clicking the previous history city and displaying that data
// rather than a search term city









// Local Storage



