<template>
	<main>
		<Card
			img-url="https://live.staticflickr.com/83/235805526_ebd124b0a8_b.jpg"
			title="Weather Demo"
			main-text="Welcome to the weather app demo!"
			><Search @search="handleSearch"
		/></Card>
		<Footer />
	</main>
</template>

<script>
	import Card from '@/components/UI/Card.vue';
	import Search from '@/components/UI/Search.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		components: {
			Footer,
			Card,
			Search
		},
		methods: {
			handleSearch() {
				console.log('searched...');
			}
		},
		created() {
			// GET request using fetch with error handling
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
		}
	};
</script>

<style scoped></style>
