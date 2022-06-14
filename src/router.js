import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/views/Home.vue'
import Profile from './components/views/Profile.vue'
import Informations from './components/views/Informations.vue'
import Password from './components/views/Password.vue'
import Address from './components/views/Address.vue'
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies()

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
router.beforeEach( (to, from, next) => {
    const pattern = /(\/profile\/)/
    let patternTest =  pattern.test(to.path)
    console.log(patternTest);
    if (patternTest) {
        console.log(patternTest);

        console.log(cookies.get('userCookie'));
        if(cookies.get('userCookie')){
            next({name: to.name})
        }else {
            next({name: 'home'})
        }
    }else {
        next()
    }
})
export default router