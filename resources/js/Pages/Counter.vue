<template>
	<div class="container">
		<h1 v-text="count" class="text-center my-5"></h1>
		<div class="row justify-content-center">
			<button class="btn btn-primary w-auto" @click="inc">INCREMENT</button>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex';

	export default {
		name: 'counter',
		
		computed: {
			...mapState('counter', {
				count: (state) => state.count
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