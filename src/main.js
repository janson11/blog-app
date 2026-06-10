import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(app)

// 创建Pinia实例并注册
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')