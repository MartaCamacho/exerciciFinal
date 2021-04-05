import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    photos: [],
  },
  getters: {
    users: state => {
      return state.users;
    },
    photos: state => {
      return state.photos;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setPhotos(state, photos) {
      state.photos = photos;
    }
  },
  actions: {
    loadUsers ({ commit }) {
      axios
          .get('http://jsonplaceholder.typicode.com/users')
          .then(response => response.data)
          .then(users => {
              console.log(users);
          commit('setUsers', users)
      })
    },
    loadPhotos ({ commit }) {
      axios
          .get('http://jsonplaceholder.typicode.com/photos')
          .then(response => response.data)
          .then(photos => {
              console.log(photos);
          commit('setPhotos', photos)
      })
    },
  },
  modules: {
  }
})

