import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OffersView from "@/views/OffersView";
import PartnersView from "@/views/PartnersView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    name: 'mfo',
    path: '/microcredits',
    component: OffersView
  },
  {
    name: 'debit',
    path: '/debit',
    component: OffersView,
  },
  {
    name: 'credit_card',
    path: '/credit',
    component: OffersView
  },
  {
    path: '/partners',
    component: PartnersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
