import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Account from "../views/Account.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "Home"
            }
        },
        {
            path: "/Home",
            name: "Home",
            component: Home
        },
        {
            path: "/account",
            name: "account",
            component: Account
        }
    ]
})