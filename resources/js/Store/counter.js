
export default {
	namespaced: true,

	state: {
		count: 0,
	},

	mutations: {
		INCREMENT: (state) => {
			state.count++
		}
	},

	actions: {
		incCounter: ({commit}) => {
			commit('INCREMENT');
		},
	},
	getters: {
		getCount: (state) => state.count
	}
}