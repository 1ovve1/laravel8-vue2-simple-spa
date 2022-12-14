import router from './../Router/index';

export default {
	namespaced: true,

	state: {
		auth: false,
		user: {},
	},

	getters: {
        auth: state => auth,
		isAuth: state => state.auth,
        isNotAuth: state => !state.auth,

		user: state => state,
        getUserName: state => state.user.name,
        getUserEmail: state => state.user.email,
	},

	mutations: {
		SET_AUTH: (state, value) => state.auth = value,
		SET_USER: (state, user) => state.user = user,
	},

	actions: {
		login: ({commit}) => axios
			.get('api/user')
			.then(({data}) => {
				commit('SET_USER', data);
				commit('SET_AUTH', true);
				router.push({name: 'home'});
			}).catch(({response: {data}}) => {
				commit('SET_USER', {});
				commit('SET_AUTH', false);
			}),
		logout: ({commit}) => {
			commit('SET_USER', {});
			commit('SET_AUTH', false);
		}
	}
}
