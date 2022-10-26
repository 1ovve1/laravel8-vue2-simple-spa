<template>
	<div class="container">
		<nav class="navbar navbar-expand navbar-dark bg-dark sticky-top">
			<router-link :to="{ name: 'home' }" class="navbar-brand mx-5">Simple SPA</router-link>
	     	<div class="collapse navbar-collapse" id="navbarsExample02">
		        <ul class="navbar-nav mr-auto">
		         	<li class="nav-item active">
		            	<router-link :to="{ name: 'counter' }" class="navbar-brand">Counter</router-link>
		          	</li>
		        </ul>
	      	</div>
	    </nav>
	</div>
</template>

<script>
	export default {
		name: 'navbar'
	}
</script>