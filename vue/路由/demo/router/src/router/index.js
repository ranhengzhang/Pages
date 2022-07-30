import VueRouter from "vue-router";
import MyAbout from "@/pages/MyAbout";
import MyHome from "@/pages/MyHome";

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: MyAbout,
        },
        {
            path: '/home',
            component: MyHome,
        }
    ]
});