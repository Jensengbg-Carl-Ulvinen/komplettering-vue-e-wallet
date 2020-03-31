import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from "../views/Registration.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "Registration"
            }
        },
        {
            path: "/Registration",
            name: "Registration",
            component: Registration
        },
        {
            path: "/account",
            name: "Account",
            component: () => import("../views/Account.vue")
        }
    ]
})