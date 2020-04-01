import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from "../views/Registration.vue"
import Account from "../views/Account.vue"
import Change from "../components/Change.vue"

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
            component: Account
        },
        {
            path: "/change",
            name: "Change",
            component: Change
        }
        
    ]
})