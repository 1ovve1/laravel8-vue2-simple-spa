import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './auth';
import counter from './counter';

Vue.use(Vuex);

const store = new Vuex.Store({
	plugins: [
		createPersistedState(),
	],

	modules: {
		auth,
		counter,
	},
});

export default store;