import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Nospartenaires from '../views/Nospartenaires.vue'
import Programme from '../views/Programme.vue'
import Carte from '../views/Carte.vue'
import FAQ from '../views/FAQ.vue'
import Actualites from '../views/Actualites.vue'
import Mentions from '../views/Mentions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mentions',
    name: 'Mentions',
    component: Mentions
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/nospartenaires',
    name: 'Nospartenaires',
    component: Nospartenaires
  },
  {
    path: '/programme',
    name: 'Programme',
    component: Programme
  },
  {
    path: '/carte',
    name: 'Carte',
    component: Carte
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites
  }
]

const router = new VueRouter({
  routes
})

export default router
