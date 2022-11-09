<template>
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
		<h1 class="absolutew-full bg-white font-bold text-xl mb-2 text-center">
			{{ title }}
		</h1>

		<img class="w-full" :src="imgUrl" alt="weather" />
		<div class="px-6 py-4">
			<p class="text-gray-700 text-base">
				{{ mainText }}
			</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<span
				class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
				>test</span
			>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Card',
		props: {
			imgUrl: String,
			title: String,
			mainText: String
		}
	};
</script>
