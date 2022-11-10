<template>
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
		<h1 class="absolutew-full bg-white font-bold text-xl mb-2 text-center">
			{{ title }}
		</h1>
		<figure>
			<img :src="imgUrl" alt="weather" style="width: 100%" />
			<figcaption>
				<span class="block" v-if="temperature">{{ city }}</span>
				<span class="block">Temp: {{ temperature }}</span>
				<span class="description">{{ description }}</span>
			</figcaption>
		</figure>
		<div class="px-6 py-4">
			<p class="text-gray-700 text-base">
				{{ mainText }}
			</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<slot />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Card',
		props: {
			imgUrl: String,
			title: String,
			mainText: String,
			city: { type: String, default: '' },
			temperature: String,
			description: String
		}
	};
</script>
