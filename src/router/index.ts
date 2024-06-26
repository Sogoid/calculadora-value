import ResultPage from "@/components/ResultPage.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/calculadora"
    },
    {
      path: "/calculadora",
      name: "calculadora",
      component: HomeView
    },
    {
      path: "/resultado",
      name: "resultado",
      component: ResultPage
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: () => import("@/views/NotFound.vue")
    },
    {
      path: "/notfound",
      redirect: "/"
    }
  ]
});

export default router;
