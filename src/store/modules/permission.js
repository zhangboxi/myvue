//存储用户允许的菜单信息
import { asyncRoutes, constantRoutes, router } from "@/router";
const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  },
  SET_MENU: show_menu => {
    state.routes = show_menu;
  }
};

const actions = {
  generateRoutes({ commit }, roles) {
    //根据用户信息获得所有路由
    let accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
    router.addRoutes(accessedRoutes);
    commit("SET_ROUTES", accessedRoutes);
  }
};

//根据role判断异步路由的权限
function filterAsyncRoutes(asyncRoutes, roles) {
  if (roles.toLocaleLowerCase() === "admin") {
    return asyncRoutes;
  } else {
    return judgeRoles(asyncRoutes, roles);
  }
}

function judgeRoles(routes, role) {
  let returnRoutes = [];
  let children = null;
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].children !== undefined) {
      children = judgeRoles(routes[i].children, role);
    }

    let oneroute = routes[i];
    if (
      oneroute.meta !== undefined &&
      oneroute.meta.auto !== undefined &&
      oneroute.meta.auto.indexOf(role) > -1
    ) {
      let { path, name, meta, component } = oneroute;
      if (children !== null) {
        returnRoutes.push({
          path,
          name,
          meta,
          component,
          children
        });
      } else {
        returnRoutes.push({
          path,
          name,
          meta,
          component
        });
      }
    }
  }
  return returnRoutes;
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
