import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CreateUser from '@/components/CreateUser'
import MyTunes from '@/components/MyTunes'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/signup', name: 'CreateUser', component: CreateUser },
    { path: '/myplaylist', name: 'MyTunes', component: MyTunes }
  ]
})