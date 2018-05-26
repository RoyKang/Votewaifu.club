import Vue from 'vue'
import store from './store.js'
import Router from 'vue-router'
import VueRouter from "vue-router";
import loginCom from './loginPage.vue';
import mainCom from './mainPage.vue';
import voteCom from './votePage.vue'
import vue from "~/main";

Vue.use(Router);

const routes = [

    { name:'login',path:'/login',component:loginCom},
    { name:'mainPage',path:'/',component:mainCom},
    { name:'votePage',path:'/createVote',component:voteCom,
        meta: { requiresAuth: true }}
]
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    let token = store.state.token;
    if(to.meta.requiresAuth){
        if(token){
            next();
        }else {
            next({
                path: '/login',
                query: {redirect: to.fullPath},
            });
            vue.$message('请先登录');
        }
    }else {
        next();
    }
});

export default router;