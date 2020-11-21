//用户信息的生成
const state = {
  token: null,
  name: "",
  avatar: "",
  introduction: "",
  roles: ""
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo = { username: "admin", password: "123456" }) {
    //这里进行登陆的操作验证
    console.log(userInfo);
    commit("SET_TOKEN", "Admin-Token");
  },

  // get user info
  getInfo({ commit }) {
    //这里进行角色的的操作验证
    commit("SET_ROLES", "roles");
    commit("SET_NAME", "boxi");
    commit("SET_AVATAR", "avatar");
    commit("SET_INTRODUCTION", "introduction");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
