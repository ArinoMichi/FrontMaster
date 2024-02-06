import { createWebHistory, createRouter } from "vue-router";
import HomeVue from "../src/components/Home.vue";
import Page1Vue from "../src/components/Page1.vue";
import Page2Vue from "../src/components/Page2.vue";

const myRoutes = [
  {
    path: "/",
    component: HomeVue,
  },
  {
    path: "/page1",
    component: Page1Vue,
  },
  {
    path: "/page2",
    component: Page2Vue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
