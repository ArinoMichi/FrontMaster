import { createWebHistory,createRouter } from "vue-router";
import HomeSeries from './components/HomeSeries';
import DetallesSerie from './components/DetallesSerie';
import PersonajesSerie from './components/PersonajesSerie';
import InsertPersonaje from './components/InsertPersonaje';
import UpdatePersonaje from './components/UpdatePersonaje';


const myRoutes = [
    {
        path:"/", component: HomeSeries
    },
    {
        path: "/detallesserie/:id", component: DetallesSerie
    },
    {
        path: "/personajes/:id", component: PersonajesSerie
    },
    {
        path: "/insert", component:InsertPersonaje
    },
    {
        path: "/modificar", component:UpdatePersonaje
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;