import VueRouter from "vue-router";
import MyAbout from "@/pages/MyAbout";
import MyHome from "@/pages/MyHome";
import MyNews from "@/pages/MyNews";
import MyMessage from "@/pages/MyMessage";

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: MyAbout,
        },
        {
            path: '/home',
            component: MyHome,
            children: [
                {
                    path: 'news',
                    component: MyNews,
                },
                {
                    path: 'message',
                    component: MyMessage,
                }
            ]
        }
    ]
});