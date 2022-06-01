import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/views/Home.vue'
import SampleRoute from './components/views/SampleRoute.vue'

const routes = [
    { path: '/', name: 'home', component: Home,
        children:[
            {
                path: '/sample',
                component: SampleRoute,
                name: 'samplec'
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router