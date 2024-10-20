import { createApp } from 'vue'
import '@/assets/style/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia';
import { routers } from "@/routers/routers";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

// Vue lazy-load
import VueLazyload from 'vue-lazyload'
const errorimage = ('@/assets/images/noimage.jpg')
app.use(VueLazyload, {
    error: errorimage,
  })

library.add(fas, far, fab)
app.component('fa', FontAwesomeIcon)
app.use(ElementPlus)
app.use(routers)
app.use(pinia)
app.mount('#app')