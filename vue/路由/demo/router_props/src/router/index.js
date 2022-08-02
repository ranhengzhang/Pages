import VueRouter from "vue-router";
import MyAbout from "@/pages/MyAbout";
import MyHome from "@/pages/MyHome";
import MyNews from "@/pages/MyNews";
import MyMessage from "@/pages/MyMessage";
import MyDetail from "@/pages/MyDetail";
import {next} from "lodash/seq";

// export default new VueRouter({
const router = new VueRouter({
    routes: [
        {
            name: 'macabaca',
            path: '/about',
            component: MyAbout,
            meta: {
                title: '关于'
            },
        },
        {
            name: 'zhuye',
            path: '/home',
            component: MyHome,
            meta: {
                title: '主页'
            },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: MyNews,
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    },
                    beforeEnter(to, from, next) {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'macabaca') {
                                next()
                            } else {
                                alert('invalid school')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: MyMessage,
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [
                        {
                            name: 'igubigu',
                            path: 'detail/',
                            component: MyDetail,
                            meta: {
                                title: '详情'
                            },
                            // props: {
                            //     a: 1,
                            //     b: '2',
                            // }
                            // props: true
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ],
                }
            ]
        }
    ]
});

// router.beforeEach((to, from, next)=>{
//     // if (to.path.search(/\/home\/(news|message)/) !== -1) {
//     if (to.meta.isAuth) { // 判断是否需要鉴权
//         if (localStorage.getItem('school') === 'macabaca') {
//             next()
//         } else {
//             alert('invalid school')
//         }
//     } else {
//         next()
//     }
// })
//
// router.afterEach((to, from) => {
//     document.title = to.meta.title || '玛卡巴卡'
// })

export default router