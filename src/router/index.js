import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Vacancies from '@/pages/vacancies/Vacancies'
import Candidates from '@/pages/candidates/Candidates'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/vacancies',
            name: 'Vacancies',
            component: Vacancies
        },
        {
            path: '/candidates',
            name: 'Candidates',
            component: Candidates
        }
    ]
})
