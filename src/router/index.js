import { createRouter, createWebHashHistory } from 'vue-router'

const vCatalog = () => import("../components/v-catalog.vue");
const vCart = () => import("../components/v-cart.vue");


const routes = [
  {
    path: "/",
    name: "catalog",
    component: vCatalog
  },
  {
    path: "/cart",
    name: "cart",
    component: vCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
