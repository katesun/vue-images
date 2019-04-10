import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  // first argument is helper object that helps modify module
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''));

    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    // Navigate to home page
    router.push('/');
  },
  // commit is function used to call a mutation
  logout: ({ commit }) => {
    // do not directly call mutation -> mustations.settoken
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}