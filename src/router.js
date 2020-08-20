import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./views/Hello";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld
    },
    {
      path: "/contact",
      name: "contact",
      component: HelloWorld
    },
    {
      path: "/about",
      name: "about",
      component: HelloWorld
    },
    {
      path: "/projects",
      name: "projects",
      component: HelloWorld
    }
  ]
});
