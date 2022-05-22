import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import SideBar from "./components/SideBar.vue"
import ContinuarViendo from "./components/ContinuarViendo.vue"
import Pagination from "./components/Pagination.vue"

const app = createApp(App)

app.use(router)
app.use(Toast);

app.component('SideBar', SideBar)
app.component('Pagination', Pagination)
app.component('ContinuarViendo', ContinuarViendo)

app.mount('#app')
