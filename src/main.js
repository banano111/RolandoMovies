import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import SideBar from "./components/SideBar.vue"
import Carrousel from "./components/Carrousel.vue"

const app = createApp(App)

app.use(router)
app.use(Toast);

app.component('SideBar', SideBar)
app.component('Carrousel', Carrousel)

app.mount('#app')
