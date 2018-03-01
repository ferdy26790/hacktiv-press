import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})
Vue.use(Vuex)

const state = {
  user: null
}

const mutations = {
  fetchUser (state, payload) {
    state.user = payload
  }
}

const actions = {

}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})
