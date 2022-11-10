const resolveCoords = city => {
	return new Promise(function (res, rej) {
		let lat, long;

		fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, {
			headers: {
				'X-Api-Key': 'eTG/xcQHzXjVzmWgPabmsA==KCkIiTK5tQp3bjLo'
			}
		})
			.then(async response => {
				const data = await response.json();

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response statusText
					const error = (data && data.message) || response.statusText;
					return Promise.reject(error);
				}
				lat = data[0].latitude;
				long = data[0].longitude;

				console.log(`lat: ${lat} / long: ${long}`);
				res({ lat, long });
			})
			.catch(error => {
				this.errorMessage = error;
				console.error('There was an error!', error);
			});
	});
};

export const weatherCodes = {
	0: 'Clear sky',
	1: 'Mainly clear',
	2: 'Partly cloudy',
	3: 'Overcast',
	45: 'Fog',
	48: 'Depositing rime fog',
	51: 'Light drizzle',
	53: 'Moderate drizzle',
	55: 'Dense drizzle',
	56: 'Light freezing drizzle',
	57: 'Heavy freezing drizzle',
	61: 'Light rain',
	63: 'Moderate rain',
	65: 'Heavy rain',
	66: 'Light freezing rain',
	67: 'Heavy freezing rain',
	71: 'Light snow',
	73: 'Moderate snow',
	75: 'Heavy snow',
	77: 'Snow grains',
	80: 'Light rain showers',
	81: 'Moderate rain showers',
	82: 'Violent rain showers',
	85: 'Light snow showers',
	86: 'Heavy snow showers',
	95: 'Thunderstorm',
	96: 'Thunderstorm with light hail',
	99: 'Thunderstorm with heavy hail'
};

export const weatherData = {
	time: '',
	code: '',
	temperature: ''
};

export const getWeather = city => {
	// var geocoder = new google.maps.Geocoder();
	// let lat, long;

	resolveCoords(city).then(coords => {
		fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.long}&hourly=temperature_2m,weathercode&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York`
		)
			.then(async response => {
				const data = await response.json();

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response statusText
					const error = (data && data.message) || response.statusText;
					return Promise.reject(error);
				}

				console.log(`data: `, data);
				weatherData.time = data.hourly.time[0];
				weatherData.code = data.hourly.weatherCode[0];
				weatherCodes.temperature = data.hourly.temperature_2m[0];

				console.log(`weatherData: `, weatherData);
			})
			.catch(error => {
				this.errorMessage = error;
				console.error('There was an error!', error);
			});
	});
};
