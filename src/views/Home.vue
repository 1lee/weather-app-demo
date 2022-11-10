<template>
	<main>
		<Card
			img-url="https://live.staticflickr.com/83/235805526_ebd124b0a8_b.jpg"
			title="Weather Demo"
			main-text="Welcome to the weather app demo!"
			><Search @search="handleSearch($event)"
		/></Card>
		<Footer />
	</main>
</template>

<script>
	import Card from '@/components/UI/Card.vue';
	import Search from '@/components/UI/Search.vue';
	import Footer from '@/components/Footer.vue';

	import { getWeather } from '@/mixins/fetchWeather';

	export default {
		components: {
			Footer,
			Card,
			Search
	},
	mixins: [getWeather],
		
		methods: {
			handleSearch(e) {
				getWeather(e);
				console.log('searched...', e);
			}
		}
	};
</script>

<style scoped></style>
