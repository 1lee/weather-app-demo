export const getWeather = () => {
	fetch(
		'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'
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
	return {
		data() {
			return {
				test: 'test'
			};
		}
	};
};
