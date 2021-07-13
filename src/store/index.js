import { createStore } from 'vuex';
import { auth, usersCollection } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
  actions: {
    // ctx allow you to use state and mutations inside the store
    // we are desestructuration the ctx so we can use commit function
    // the second parameter is the payload that it was pass in from the dispatch
    async register({ commit }, payload) {
      await auth.createUserWithEmailAndPassword(
        payload.email,
        // eslint-disable-next-line comma-dangle
        payload.password
      );

      await usersCollection.add({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      commit('toggleAuth');
    },
  },
});
