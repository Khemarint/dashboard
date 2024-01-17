import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Dashboard from './view/Dashboard.vue'
import home from './view/HomeView.vue'
import profile from './view/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/home', component: home },
    { path: '/profile', component: profile },
  ]
})

createApp(App).use(router).mount('#app')

