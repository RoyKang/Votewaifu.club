import Vue from 'vue'
import store from './store.js'
import Router from 'vue-router'
import VueRouter from "vue-router";
import loginCom from './loginPage.vue';
import mainCom from './mainPage.vue';
import voteCom from './votePage.vue'

Vue.use(Router);

const routes = [

    { name:'login',path:'/login',component:loginCom},
    { name:'mainPage',path:'/',component:mainCom},
    { name:'votePage',path:'/createVote',component:voteCom}
]
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    let token = store.state.token;
    if(to.meta.requireAuch){
        if(token){
            next();
        }else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    }else {
        next();
    }
});

export default router;