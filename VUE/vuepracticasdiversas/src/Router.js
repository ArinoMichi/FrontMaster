import { createWebHistory,createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent';
import CollatComponent from './components/CollatzComponent';
import TablaMultiplicar from './components/TablaMultiplicar';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/collatz", component: CollatComponent
    },
    {
        path: "/tablamultiplicar", component: TablaMultiplicar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;