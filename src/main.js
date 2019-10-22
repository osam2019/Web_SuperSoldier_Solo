import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import routes from './routes';

Vue.use(VueRouter)

Vue.use(ElementUI);
const router = new VueRouter({mode:"history",routes:routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
