<template>
	<header class="container">
		<Navbar></Navbar>
		<router-view></router-view>
	</header>
</template>

<script>
	export default {
		name: 'app',
		components: {
			Navbar: () => import('./Components/Navbar.vue'),
		}
	}
</script>