import Vue from 'vue'
import ElementUI from 'element-ui'
import '../theme/index.css'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

Vue.use(ElementUI);

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

export default app;