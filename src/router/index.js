import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import UserDetails from '../views/UserDetails.vue';
import PictureDetails from '../views/PictureDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "Users" */ '../views/Users.vue'),
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    props: true
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: () => import(/* webpackChunkName: "Pictures" */ '../views/Pictures.vue'),
  },
  {
    path: '/pictures/:id',
    name: 'PictureDetails',
    component: PictureDetails,
    props: true
  },
  {
    path: '/found',
    name: 'UserNotFound',
    component: () => import(/* webpackChunkName: "UserNotFound" */ '../views/UserNotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
