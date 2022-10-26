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
]

export default routes;