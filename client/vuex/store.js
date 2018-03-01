import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})
Vue.use(Vuex)

const state = {
  user: null,
  isLogin: false,
  articles: null
}

const mutations = {
  fetchUser (state, payload) {
    state.user = payload
    state.isLogin = true
  },
  emptyUser (state) {
    state.user = null
    state.isLogin = false
  },
  fetchArticles (state, payload) {
    state.articles = payload
  },
  addNewArticle (state, payload) {
    state.articles.push(payload)
    alert('success add article')
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
          localStorage.setItem('token', response.data.token)
          commit('fetchUser', response.data.user)
        } else {
          console.log(response)
        }
      }).catch((err) => {
        console.error(err)
      })
  },
  getAllArticles ({commit}) {
    http.get('users/articles')
      .then((response) => {
        console.log(response.data)
        commit('fetchArticles', response.data.articles)
      }).catch((err) => {
        console.log(err);
      })
  },
  getAllCategory ({commit}, payload) {
    http.get(`users/articles/category/${payload}`)
      .then((response) => {
        console.log(response.data)
        commit('fetchArticles', response.data.articles)
      }).catch((err) => {
        console.error(err)
      })
  },
  addArticle ({commit}, payload) {
    http.post(`users/articles`, payload,
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then((response) => {
        console.log(response.data.article)
        commit('addNewArticle', response.data.article)
      }).catch((err) => {
        console.log(err)
      })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
