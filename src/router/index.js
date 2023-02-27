import { createRouter, createWebHistory } from "vue-router";
import About from '../views/AboutApp'

const routes = [
    {
        path: '/about',
        name: 'AboutApp',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})