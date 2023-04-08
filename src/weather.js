async function getLatLong() {
  await fetch('https://ipapi.co/json/')
    .then(response => {
      return response.json();
    })
    .then(data => {
      userCity = data.city;
      userLat = data.latitude;
      userLong = data.longitude;
    });
};

async function getWeather() {
  let tempUnits = document.querySelector('input[name="temp-units"]:checked').value;
  await getLatLong(); 
  fetch('https://api.open-meteo.com/v1/forecast?latitude=' + userLat + '&longitude=' + userLong + '&current_weather=true&temperature_unit=' + tempUnits  + '&timezone=auto')
    .then(response => {
      return response.json();
    })
    .then(data => {
      let currentTemp = Math.round(data.current_weather.temperature);
      let wmo = data.current_weather.weathercode;
      let dayOrNight = data.current_weather.is_day;
      let weatherImage = translateWeathercode(wmo, dayOrNight);

      writeWeatherCell(userCity, weatherImage, currentTemp, tempUnits); 
    });
};

function translateWeathercode(wmo, dayOrNight) {
  switch (wmo) {
    case 0:
      if (dayOrNight === 1) {
	return "clear";
      } else if (dayOrNight === 0) {
	return "clear-night";
      };
      break;
    case 1:
    case 2:
      if (dayOrNight === 1) {
	return "partly-cloudy";
      } else if (dayOrNight === 0) {
	return "partly-cloudy-night";
      };
      break;
    case 3:
      return "overcast";
      break;
    case 45:
    case 48:
      return "fog";
      break;
    case 51:
    case 53:
    case 55:
      return "drizzle";
      break;
    case 56:
    case 57:
    case 66:
    case 67:
      return "freezing-rain";
      break;
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return "rain";
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "snow";
      break;
    case 95:
    case 96:
    case 99:
      return "thunderstorm";
      break;
  };
}

function writeWeatherCell(location, condition, temperature, units) {
  let weatherCell = document.getElementById('weather');
  weatherCell.innerHTML = '';
  const weatherImage = document.createElement('img');
  console.log(units);
  if (units === "celsius") {
    units = '°C';
  } else if (units === "fahrenheit") {
    units = '°F';
  }
  console.log(units);
  let weatherDetailsText = temperature + units;
  let weatherImagePrefix = './img/weather/'
  let weatherImageSuffix = '.svg'
  let weatherImageHref = weatherImagePrefix + condition + weatherImageSuffix;
  weatherImage.id = 'weather-image';
  weatherImage.src = weatherImageHref;
  const weatherDetails = document.createElement('span');
  weatherDetails.id = 'weather-details';

  weatherDetails.textContent = weatherDetailsText;
  weatherCell.append(weatherImage,weatherDetails);
}

getWeather();
