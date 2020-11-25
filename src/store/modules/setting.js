const state = {
  menuleft: true
};

const mutations = {
  SET_MENU: state => {
    state.menuleft = !state.menuleft;
  }
};
const actions = {
  changeMenuleft({ commit }) {
    commit("SET_MENU");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
