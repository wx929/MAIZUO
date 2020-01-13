import Vue from 'vue';
//引入路由
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);
import movie from '../pages/movie';
import cinemas from '../pages/cinemas';
import news from '../pages/news';
import mine from '../pages/mine';
let router = new VueRouter({
    routes: [{
        name: "movie",
        path: "/movie",
        component: movie
    },
    // {
    //     path: "/",
    //     redirect: movie
    // },
    {
        name: "cinemas",
        path: "/cinemas",
        component: cinemas
    },
    {
        name: "news",
        path: "/news",
        component: news
    },
    {
        name: "mine",
        path: "/mine",
        component: mine
    }]
})
export default router;