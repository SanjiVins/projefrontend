import VueRouter from "vue-router"
import Vue from "vue";

import ProductGetAll from "./components/products/ProductGetAll.vue";
import Product from "./components/products/Product.vue";

Vue.use(VueRouter);

const routes = [
  {path : '/', component : ProductGetAll},
  {path : '/getAll', component : ProductGetAll},
  {path : '*', redirect : "/"},
];

export const router = new VueRouter({
  mode : "history",
  routes
});
