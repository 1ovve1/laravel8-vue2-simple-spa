<template>
	<div class="container">
		<h1 v-text="count" class="text-center my-5"></h1>
		<div class="row justify-content-center">
			<button class="btn btn-primary w-auto" @click="inc">INCREMENT</button>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'counter',
		
		computed: {
			...mapGetters({
				count: 'counter/getCount'
			}),
		},

		methods: {
			...mapActions({
				incCounter: 'counter/incCounter',
			}),

			inc() {
				this.incCounter();
			}
		}
	}
</script>