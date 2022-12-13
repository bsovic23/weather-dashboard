// API URL
var APIKey = "46be7341d47ff94911e8303130d2f7c0";

// Search Form Variables
var cityForm = document.querySelector("#cityForm");
var cityEl = document.querySelector("#cityname");

var searchList = document.querySelector("#search-history-list");

// Weather Box Variables
var cityWeatherEl = document.querySelector("#cityWeather");

// City Search History
citySearchHistory = [];


// ===================================================================//
// Search City Function
var getCity = function(event) {
    event.preventDefault();

    var cityName = cityEl.value.trim();

    cityForecast(cityName);     

    cityEl.value = "";
};

// ===================================================================//
// Function for finding city in API
var cityForecast = function(city) {
    var searchCity = city;

    var cityWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + APIKey;

    fetch(cityWeatherUrl).then(function(response) {
        response.json().then(function(data) {

          dataCity = data.name;
          dataLon = data.coord.lon;
          dataLat = data.coord.lat;

          cityWeather(dataCity, dataLon, dataLat)
        });
      });
};

// ===================================================================//
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

    const $searchList = document.querySelector("#search-history-list");

    const searchItem = 
    `
    <button id="history-btn" value="${city}">
      <h2>${city}</h2>
    </button>
    `

    $searchList.innerHTML +=searchItem;

    // Today weather history
    weather(city, longitude, latitude);
};


// ===================================================================//
// Display the Search Term Weather

var weather = function(city, longitude, latitude) {
    // Creating the display for todays weather

    todayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid="+APIKey

    fetch(todayUrl).then(function(response) {
        response.json().then(function(data) {
          var cityWeatherObject = {
            "city": data.city.name,
            "todayweather": data.list[0],
            "day1weather": data.list[8],
            "day2weather": data.list[7],
            "day3weather": data.list[16],
            "day4weather": data.list[24],
            "day5weather": data.list[32]
          };
          console.log(cityWeatherObject)

          todayWeatherBox(cityWeatherObject);
          forecastWeatherBox(cityWeatherObject);
        });
      }); 
};

// ===================================================================//
// Display the Weather for today

var todayWeatherBox = function(cityWeatherObject) {

  const $todayCityContainer = document.querySelector("#today-container");

  // New way of adding card
  const weatherToday = 
  `
  <div class="cityHeader">
    <h1>${cityWeatherObject.city}</h1>
    <p>Date: ${cityWeatherObject.day1weather.dt_txt}</p>
    <p>Temperature: ${cityWeatherObject.day1weather.main.temp}</p>
    <p>Wind Speed: ${cityWeatherObject.day1weather.wind.speed}</p>
    <p>Humidity: ${cityWeatherObject.day1weather.main.humidity}</p>
  </div>
  `
  $todayCityContainer.innerHTML = weatherToday;

};

// ===================================================================//
// Display the Forecast Weather for 5 days

// NOTE TO BRIT: MAP THE 5 DIFFERENT BOXES

var forecastWeatherBox = function(cityWeatherObject) {
    
};




// ===================================================================//
// Function for clicking the previous history city and displaying that data
// rather than a search term city

// Brit: Need to make the search history buttons with id, and when click, the button re runs the 'today weather' function
/*
var searchHistoryBtn = function() {
  console.log(`${value}`);
};

const historyBtn = document.querySelector("#history-btn");
historyBtn.addEventListener('click', searchHistoryBtn);

*/





// ===================================================================//
// Button that starts the entire search process
cityForm.addEventListener('submit', getCity);
