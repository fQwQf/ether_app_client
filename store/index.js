import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userName: "",
		testVersion: false
	},
	mutations: {
		login(state, userName) {
			state.userName = userName;
			state.hasLogin = true;
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
			uni.removeStorage({
				key:'haslogin'
			})
		},
		setTestVersion(state,a) {
			state.testVersion = a
		},
	}
})

export default store
