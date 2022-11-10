<template>
	<div v-if="favorite1 || favorite2 || favorite3">
		<h3>Favorites</h3>
		<ul
			class="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4"
			id="pills-tab3"
			role="tablist"
		>
			<li class="nav-item" role="presentation">
				<button
					type="button"
					class="nav-link block font-medium text-xs leading-tight uppercase rounded w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
					id="pills-home-tab3"
					data-bs-toggle="pill"
					data-bs-target="#pills-home3"
					role="tab"
					aria-controls="pills-home3"
					aria-selected="true"
					@click="search(favorite1)"
				>
					{{ favorite1 }}
				</button>
			</li>
			<li class="nav-item" role="presentation">
				<button
					type="button"
					class="nav-link block font-medium text-xs leading-tight uppercase rounded w-full md:w-auto px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
					id="pills-profile-tab3"
					data-bs-toggle="pill"
					data-bs-target="#pills-profile3"
					role="tab"
					aria-controls="pills-profile3"
					aria-selected="false"
					@click="search(favorite2)"
				>
					{{ favorite2 }}
				</button>
			</li>
			<li class="nav-item" role="presentation">
				<button
					type="button"
					class="nav-link block font-medium text-xs leading-tight uppercase rounded w-full md:w-auto px-6 py-3 my-2 md:ml-2 focus:outline-none focus:ring-0"
					id="pills-contact-tab3"
					data-bs-toggle="pill"
					data-bs-target="#pills-contact3"
					role="tab"
					aria-controls="pills-contact3"
					aria-selected="false"
					@click="search(favorite3)"
				>
					{{ favorite3 }}
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Favorites',
		props: {
			favorite1: String,
			favorite2: String,
			favorite3: String
		},
		methods: {
			methods: {
				search(e) {
					this.$emit('search', e);
				}
			}
		}
	};
</script>
