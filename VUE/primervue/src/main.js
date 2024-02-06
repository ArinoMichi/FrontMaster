import { createApp } from 'vue'
import App from './App.vue'
//IMPORTAMOS LA CONSTANTE router DE Router.js
import router from './Router'

createApp(App)
.use(router)
.mount('#app')

