import { createApp } from 'vue'
import { router } from './app-router/router.js'
import App from './App.vue'

import './assets/styles/main.scss'

createApp(App).use(router).mount('#app')
