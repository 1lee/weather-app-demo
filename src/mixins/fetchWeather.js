export const getWeather = address => {
	var geocoder = new google.maps.Geocoder();
	let lat, long;

	geocoder.geocode({ address: address }, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			lat = results[0].geometry.location.lat();
			long = results[0].geometry.location.lng();
		}
	});

	fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`
	)
		// fetch(
		// 	`http://maps.googleapis.com/maps/api/geocode/json?address=Miami+FL&sensor=false`
		// )
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
	return {
		data() {
			return {
				test: 'test'
			};
		}
	};
};
