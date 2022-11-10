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
			})
			.catch(error => {
				this.errorMessage = error;
				console.error('There was an error!', error);
			});
	});
};
