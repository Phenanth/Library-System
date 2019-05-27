/* Vuex for token management. */
import api from '../../api.js'

const state = {
	token: null,
	needAuth: null
}

const getters = {
	showTokenState: function (state) {
		return localStorage.getItem('token')
	},
	showAuthState: function (state) {
		return localStorage.getItem('auth')
	}
	
}

const actions = {
	storeToken: function ({ commit }, data) {
		commit('STORETOKEN', data)
	},
	removeToken: function ({ commit }) {
		commit('REMOVETOKEN')
	},
	updateToken: function ({ commit }, data) {
		commit('REMOVETOKEN')
		commit('STORETOKEN', data)
	},
	setAuth: function ({ commit }, data) {
		commit('SETAUTH', data)
	},
	removeAuth: function({ commit }) {
		commit('REMOVEAUTH')
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
	REMOVETOKEN: function (state) {
		localStorage.removeItem('token')
		state.token = null
	},
	SETAUTH: function (state, data) {
		localStorage.setItem('auth', data)
	},
	REMOVEAUTH: function(state) {
		localStorage.removeItem('auth')
		state.needAuth = null
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


