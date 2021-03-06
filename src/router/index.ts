import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import CompositionTest from "../views/CompositionTest.vue";
import ProvideInjectTest from "../views/ProvideInjectTest.vue";
import VuexTest from "@/views/VuexTest.vue";
import FetchCSV from "@/views/FetchCSV.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/composition-test",
    name: "CompositionTest",
    component: CompositionTest,
  },
  {
    path: "/provide-inject-test",
    name: "ProvideInjectTest",
    component: ProvideInjectTest,
  },
  {
    path: "/vuex-test",
    name: "VuexTest",
    component: VuexTest,
  },
  {
    path: "/fetch-csv",
    name: "FetchCSV",
    component: FetchCSV,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
