import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://api.dev.combateafraude.com'

export default new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.authorization = userData.idToken
    },

    clearUserData () {
      localStorage.removeItem('user')
      location.reload()
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return axios
        .post('/auth/signin', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    },

   getReports() {
      return axios
       .get('/reports')
    },
    getExecutions(j, id) {
      return axios
       .get(`/reports/${id.id}/executions`)

    },

    logout ({ commit }) {
      commit('clearUserData')
    }
  },

  getters : {
    isLogged: state => !!state.user
  }
})
