/* Vuex for token management. */
import api from '../../api.js'

const state = {
	token: null
}

const getters = {
	showTokenState: function (state) {
		return localStorage.getItem('token')
	}
}

const actions = {
	storeToken: function ({ commit }, data) {
		commit('STORETOKEN', data)
	},
	logout: function ({ commit }) {
		commit('LOGOUT')
	}
}

const mutations = {
	STORETOKEN: function (state, data) {
		localStorage.setItem('token', data)
		state.token = data
	},
	LOGOUT: function (state) {
		localStorage.removeItem('token')
		state.token = null
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
