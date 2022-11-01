<template v-if="boardList.length">
	<div class="row offset-1">
		<div class="col-3 g-1 m-2" v-for="item in list" :key="item.id">
			<Board :item="item"></Board>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BoardList",
		
		components: {
			Board: () => import('./../Components/Board.vue'),
		},
		
		props: {
			list: []
		},

	}
</script>