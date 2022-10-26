<template>
	<div class="container">
		<h1 v-text="count" class="text-center my-5"></h1>
		<div class="row justify-content-center">
			<button class="btn btn-primary w-auto" @click="$store.commit('INCREMENT')">INCREMENT</button>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'counter',
		computed: {
			...mapState({
				count: state => state.count
			})
		}
	}
</script>