import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import './assets/styles/header.css'
import './assets/styles/cards.css'


const app = createApp(App)
const pinia = createPinia()

// Primero inicializamos pinia para que el store esté disponible para el router
app.use(pinia)

// Luego inicializamos el router que puede depender del store
app.use(router)

app.mount('#app')