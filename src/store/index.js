import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: [],
    consultedUsers: [],
    pictures: [],
    currentPicture: [],
    consultedPictures: [],
  },
  getters: {
    users: state => {
      return state.users;
    },
    pictures: state => {
      return state.pictures;
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
    setPictures(state, pictures) {
      state.pictures = pictures;
    },
    setCurrentPicture(state, currentPicture) {
      state.currentPicture = currentPicture;
    },
    setConsultedPictures(state, consultedPictures) {
      state.consultedPictures = [...state.consultedPictures, parseInt(consultedPictures)];
    },
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
    loadPictures ({ commit }) {
      axios
          .get('http://jsonplaceholder.typicode.com/photos')
          .then(response => response.data)
          .then(pictures => {
          commit('setPictures', pictures)
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
    loadCurrentPicture ({ commit }, pictureId) {
      axios
          .get('http://jsonplaceholder.typicode.com/photos')
          .then(response => response.data)
          .then(pictures => pictures.map(picture => {
            if (picture.id === pictureId){
              return commit('setCurrentPicture', picture)
            }
          }))
    },
    addCurrentUserToSeen ({ commit }, user) {
              return commit('setConsultedUsers', user)
    },
    addCurrentPictureToSeen ({ commit }, picture) {
      return commit('setConsultedPictures', picture)
    }
  },
  modules: {
  }
})

