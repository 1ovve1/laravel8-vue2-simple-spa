<template>
	<div class="item shadow">
		<h1 class="text-center" v-text="item.title"></h1>
		<p class="text-end mr-2" v-text="item.price"></p>
	</div>
</template>

<script>
	export default {
		name: "Board",

		props: {
			item: {
				title: String, 
				content: String,
				price: Number,
			}
		},
	}
</script>