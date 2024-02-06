import { createWebHistory,createRouter } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent';
import CreateDepartamento from './components/CreateDepartamento';
import DetallesDepartamento from './components/DetallesDepartamento';
import UpdateDepartamento from './components/UpdateDepartamento';
import DeleteDepartamento from './components/DeleteDepartamento';

const myRoutes = [
    {
        path:"/", component: DepartamentosComponent
    },
    {
        path: "/create", component: CreateDepartamento
    },
    {
        path: "/detalles/:id/:nombre/:localidad", component: DetallesDepartamento
    },
    {
        path: "/update/:id", component: UpdateDepartamento
    },
    {
        path: "/delete/:id", component: DeleteDepartamento
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;