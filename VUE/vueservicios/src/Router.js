import { createWebHistory,createRouter } from "vue-router";
import EmpleadosDetalle from "./components/EmpleadosDetalle";
import CochesComponent from "./components/CochesComponent";
import HomeComponent from "./components/HomeComponent";
import EmpleadosOficios from "./components/EmpleadosOficios";

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/coches", component: CochesComponent
    },
    {
        path: "/empleados", component: EmpleadosDetalle
    },
    {
        path: "/empleadosoficios/:oficio", component: EmpleadosOficios
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;