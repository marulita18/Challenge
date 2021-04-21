//Feature 1
let now = new Date();
let currentDate = document.querySelector("#day");

function formattedDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  let formattedDate = `${currentDay} ${currentHour}:${currentMinutes}`;
  return formattedDate;
}

currentDate.innerHTML = formattedDate(now);

//Task
function showTemperature(response) {
  response.preventDefault();
  let temperature = Math.round(response.data.main.temp);
  let city = document.querySelector("#search-city");
  let apiKey = "d78a03d26b92fc30d9a35780b2c61fd3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;

  let actualTemperature = document.querySelector("#actual-temperature");
  actualTemperature.innerHTML = temperature;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", showTemperature);

//Bonus

function currentLocation(position) {
  console.log(position);
}

navigator.geolocation.getCurrentPosition(currentLocation);
