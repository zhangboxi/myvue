import router from "./index";
import store from "@/store";
import { getToken } from "@/utils/auth";
// 获取toaken，用于判断是否登陆，正常token应该在cookies中
// function getToken() {
//   return store.state.user.token;
// }

//下面的判断有很大的问题，
//1 没有对role进行判断，且当有role却没有路由列表和菜单列表的问题，还有就是有token却无role的问题
//2 对任意路径的走向问题
//3 应该将路由列表和菜单列表放到这边来进行，不应该在 login.vue中
// 路由列表和菜单列表 这两个判断好重复，关键是对不显示的路由，需要在菜单列表中增加一个判断，如果为隐藏，菜单列表就不显示
router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next();
    } else {
      if (store.state.user.roles && store.state.user.roles.length > 0) {
        next();
      } else {
        const { roles } = await store.dispatch("user/getInfo", hasToken);
        await store.dispatch("permission/generateRoutes", roles);
        next("/index");
      }
    }

    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
// router.beforeEach(async (to, from, next) => {});
