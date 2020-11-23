import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/permission"; // permission control
import {
  Button,
  Select,
  Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from "element-ui";
Vue.use(Button);
Vue.use(Select);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Container);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.config.productionTip = false;
if (process.env.VUE_APP_MOCK && process.env.NODE_ENV === "development") {
  require("../mock/index.js");
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
