import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: [],
    consultedUsers: [],
    photos: [],
    currentPhoto: [],
    consultedPhotos: [],
  },
  getters: {
    users: state => {
      return state.users;
    },
    photos: state => {
      return state.photos;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setConsultedUsers(state, consultedUsers) {
      state.consultedUsers = [...state.consultedUsers, parseInt(consultedUsers)];
    },
    setPhotos(state, photos) {
      state.photos = photos;
    },
    setCurrentPhoto(state, photo) {
      state.currentPhoto = photo;
    }
  },
  actions: {
    loadUsers ({ commit }) {
      axios
          .get('http://jsonplaceholder.typicode.com/users')
          .then(response => response.data)
          .then(users => {
          commit('setUsers', users)
      })
    },
    loadCurrentUser ({ commit }, userId) {
      axios
          .get('http://jsonplaceholder.typicode.com/users')
          .then(response => response.data)
          .then(users => users.map(user => {
            if (user.id === userId){
              return commit('setCurrentUser', user)
            }
          }))
    },
    addCurrentUserToSeen ({ commit }, user) {
              return commit('setConsultedUsers', user)
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

