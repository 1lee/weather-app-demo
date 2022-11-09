<template>
	<main>
		<Card
			img-url="https://live.staticflickr.com/83/235805526_ebd124b0a8_b.jpg"
			title="Weather Demo"
			main-text="Welcome to the weather app demo!"
		/>
		<Footer />
	</main>
</template>

<script>
	import Card from '@/components/UI/Card.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		components: {
			Footer,
			Card
		}
	};
</script>

<style scoped></style>
