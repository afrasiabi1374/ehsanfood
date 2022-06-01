import '../src/assets/css/main.scss'
import {store} from "./store"
import { createApp } from 'vue'
import App from './App.vue'
import  router from './router.js'
createApp(App).use(store).use(router).mount('#app')
