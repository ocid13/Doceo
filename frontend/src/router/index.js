import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  { path: '/', component: ProductList },
  { path: '/products/:id', component: ProductDetail }
]

export default createRouter({
  history: createWebHistory(),
  routes
})