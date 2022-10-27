<template>
	<header class="container">
		<Navbar></Navbar>
		<main class="mt-3">
            <router-view></router-view>
        </main>
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