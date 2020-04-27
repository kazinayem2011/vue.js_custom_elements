import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'switchpage',
            component: () => import('../components/parent/SwitchPage.vue')
        },
        {
            path: '/textinput',
            name: 'textinput',
            component: () => import('../components/parent/TextInputPage.vue')
        },
        {
            path: '/button',
            name: 'button',
            component: () => import('../components/parent/ButtonPage.vue')
        },
        {
            path: '/select',
            name: 'select',
            component: () => import('../components/parent/SelectPage.vue')
        },
        {
            path: '/multiselect',
            name: 'multiselect',
            component: () => import('../components/parent/MultiselectPage')
        }
    ],
    mode: 'history'
})
