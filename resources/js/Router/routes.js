const routes = [
	{
		path: '/',
		component: () => import('../Pages/Home.vue'),
		name: 'home'
	},
	{
		path: '/counter',
		component: () => import('../Pages/Counter.vue'),
		name: 'counter'
	},
	{
		path: '/login',
		component: () => import('../Pages/Login.vue'),
		name: 'login',
	},
	{
		path: '/register',
		component: () => import('../Pages/Register.vue'),
		name: 'register',
	},
]

export default routes;