import Vue from "vue";
import Router from "vue-router";
import Modal from "./views/Modal.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "modal",
      component: Modal
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/drawer",
      name: "drawer",
      component: () =>
        import(/* webpackChunkName: "drawer" */ "./views/Drawer.vue")
    },
    {
      path: "/simple",
      name: "simple",
      component: () =>
        import(/* webpackChunkName: "simple" */ "./views/Simple.vue")
    },
    {
      path: "/stagger",
      name: "stagger",
      component: () =>
        import(/* webpackChunkName: "stagger" */ "./views/Stagger.vue")
    },
    {
      path: "/cards",
      name: "cards",
      component: () =>
        import(/* webpackChunkName: "cards" */ "./views/Cards.vue")
    },
    {
      path: "/state",
      name: "state",
      component: () => import("./views/State.vue")
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () => import("./views/Timeline.vue")
    },
    {
      path: "/master",
      name: "master",
      component: () => import("./views/Master.vue")
    }
  ]
});
