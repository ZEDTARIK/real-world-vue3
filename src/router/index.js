import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import AboutView from '../views/AboutView.vue'
import EventDetail from '../components/EventDetail.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/Event/:id',
    props: true,
    name: 'EventDetail',
    component: EventDetail,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
