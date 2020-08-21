import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./views/Hello";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/video/:id",
      component: HelloWorld
    },
    {
      path: '/', redirect: 'video/Creating%20a%20Campaign'
    }
  ]
});
