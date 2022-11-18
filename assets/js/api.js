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

    // Previous Search History
    divEl = document.createElement('div');
    pEl = document.createElement('p');
    pEl.textContent = city;
    pEl.setAttribute("style", "background-color: grey; color: pink; padding: 10px; text-align: center;");
    divEl.appendChild(pEl);
    searchList.appendChild(divEl);

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

  console.log(cityWeatherObject);

  // Creating the DOM elements for today weather using the data
  var todayCityContainer = document.querySelector("#today-container");
 
  var todayDiv = document.createElement('div');

  var todayCityEl = document.createElement('h2');
  var todayDateEl = document.createElement('h3');
  var todayTempEl = document.createElement('h3');
  var todayWindEl = document.createElement('h3');
  var todayHumidityEl = document.createElement('h3');

  todayCityEl.textContent = "City: " + cityWeatherObject.city;
  todayDateEl.textContent = "Date: " + cityWeatherObject.day1weather.dt_txt;
  todayTempEl.textContent = "Temperature: " + cityWeatherObject.day1weather.main.temp;
  todayWindEl.textContent = "Wind Speed: " + cityWeatherObject.day1weather.wind.speed;
  todayHumidityEl.textContent = "Humidity: " + cityWeatherObject.day1weather.main.humidity;

  // Add to box
  todayDiv.appendChild(todayCityEl);
  todayDiv.appendChild(todayDateEl);
  todayDiv.appendChild(todayTempEl);
  todayDiv.appendChild(todayWindEl);
  todayDiv.appendChild(todayHumidityEl);

  todayCityContainer.appendChild(todayDiv);
};

// ===================================================================//
// Display the Forecast Weather for 5 days

var forecastWeatherBox = function(cityWeatherObject) {
    
  console.log(cityWeatherObject);
};




// ===================================================================//
// Function for clicking the previous history city and displaying that data
// rather than a search term city








// ===================================================================//
// Button that starts the entire search process
cityForm.addEventListener('submit', getCity);
