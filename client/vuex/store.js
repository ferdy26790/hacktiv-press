import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})
Vue.use(Vuex)

const state = {
  user: null,
  isLogin: false
}

const mutations = {
  fetchUser (state, payload) {
    state.user = payload
    state.isLogin = true
  }
}

const actions = {
  register ({commit}, payload) {
    http.post('register', payload)
      .then((response) => {
        if (response.status === 200) {
          alert('register berhasil')
        } else {
          console.log(response)
        }
      }).catch((err) => {
        console.error(err)
      })
  },
  login ({commit}, payload) {
    http.post('login', payload)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
        } esle {
          console.log(response)
        }
      }).catch((err) => {
        console.error(err)
      })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
