<template>
	<main>
		<Card
			img-url="https://live.staticflickr.com/83/235805526_ebd124b0a8_b.jpg"
			title="Weather Demo"
			:city="city"
			:temperature="temperature"
			:description="description"
			main-text="Welcome to the weather app demo!"
			><Favorites /> <Search @search="handleSearch($event)"
		/></Card>
		<Footer />
	</main>
</template>

<script>
	import Card from '@/components/UI/Card.vue';
	import Search from '@/components/UI/Search.vue';
	import Favorites from '@/components/Favorites.vue';
	import Footer from '@/components/Footer.vue';

	import { getWeather, weatherCodes } from '@/mixins/fetchWeather';

	export default {
		components: {
			Footer,
			Card,
			Search,
			Favorites
		},
		mixins: [getWeather, weatherCodes],
		data() {
			return {
				city: '',
				temperature: '',
				description: ''
			};
		},

		methods: {
			handleSearch(e) {
				getWeather(e).then(data => {
					console.log('weather: ', data);
					this.temperature = data.temperature_2m[0];
					let code = data.weathercode[0];
					this.description = weatherCodes[code];
				});
				let favorites = [];
				if (typeof e === 'string') {
					this.city = e;
					console.log('favorites: ', favorites);

					favorites.push(e);
				}
				console.log(
					`favorites in localstorage: `,
					localStorage.getItem('favorites')
				);
				localStorage.setItem('favorites', JSON.stringify(favorites));
			}
		}
	};
</script>

<style scoped></style>
