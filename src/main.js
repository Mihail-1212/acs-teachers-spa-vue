import { createApp } from 'vue'
import router from './router'
import store from './store'
import initial from './initial'
import App from './App.vue'


// Create vue application
const app = createApp(App)

// Bind vuex
app.use(store)

// Bind vue router
app.use(router)

// Start initial function with app as argument
initial(app)

// Start application
app.mount('#app')
