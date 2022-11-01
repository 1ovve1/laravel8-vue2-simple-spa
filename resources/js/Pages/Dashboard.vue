<template>
	<div class="row">
		<div class="container-fluied">
			<button @click="createBb">
				Create board
			</button>
		</div>

		<div class="container-fluied">
			<h1>
				Created boards:
			</h1>


			<BoardList :list="boards"></BoardList>
		</div>		
	</div>

</template>

<script>
	export default {
		name: 'Dashboard',
		components: {
			BoardList: () => import('./../Components/BoardList.vue'),
		},

		data() {
			return {
				boards: [Object],
			}
		},

		created() {
			this.initBoards();
		},

		methods: {
			initBoards() {
				axios.get('/sanctum/csrf-cookie');
				axios.get('/api/boards')
				.then(({data}) => {
					this.boards = data.data;
				}).catch(({response: {data}}) => {
					alert(data.message);
				});
			},
			async createBb() {

			}
		},
	}
</script>