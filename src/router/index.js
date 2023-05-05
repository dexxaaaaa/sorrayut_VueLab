import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/vmodel",
      component: () => import("../components/vmodel.vue")
    },
    {
      path: "/HelloWorld",
      component: () => import("../components/HelloWorld.vue")
    },
    {
      path: "/von",
      component: () => import("../components/von.vue")
    },
    {
      path: "/vbind",
      component: () => import("../components/vbind.vue")
    }
  ]
});
