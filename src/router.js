import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/views/Home.vue'
import Profile from './components/views/Profile.vue'
import Informations from './components/views/Informations.vue'
import Password from './components/views/Password.vue'
import Address from './components/views/Address.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/profile', name: 'profile', component: Profile, children: [
        {path: '/profile/informations', name: 'informations', component: Informations},
        {path: '/profile/Password', name: 'password', component: Password},
        {path: '/profile/Address', name: 'address', component: Address},
    ] }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router