import Vue from 'vue'
import Router from 'vue-router'
import education from './education'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: education
})
