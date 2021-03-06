import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokedex from '../views/Pokedex.vue'
import PokedexId from '../views/PokedexId.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/pokedex/:id',
    name: 'PokedexId',
    component: PokedexId
  },

]

const router = new VueRouter({
  mode: "history",
  routes
});

export default router
