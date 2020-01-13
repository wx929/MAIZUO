import Vue from 'vue';
//引入路由
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);
import movie from '../pages/movie';
import cinemas from '../pages/cinemas';
import news from '../pages/news';
import mine from '../pages/mine';
import nowplaying from '../components/nowplaying';
import comingsoon from '../components/comingsoon';
let router = new VueRouter({
    routes: [{
        name: "movie",
        path: "/movie",
        component: movie,
        children: [
            {

                path: 'nowPlaying',
                component: nowplaying
            },
            {
                // 当 /user//comingSoon 匹配成功
                // comingsoon 会被渲染在 User 的 <router-view> 中
                path: 'comingSoon',
                component: comingsoon
            }
        ]
    },
    {
        path: "/",
        redirect: "/movie/nowplaying"
    },
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