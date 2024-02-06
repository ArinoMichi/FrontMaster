import { createWebHistory,createRouter } from "vue-router";
import CochesComponent from './components/CochesComponent';
import DetallesCoches from './components/DetallesCoches';
import EditCoches from './components/EditCoches';
import InsertCoche from './components/InsertCoche';


const myRoutes = [
    {
        path:"/", component: CochesComponent
    },
    {
        path: '/detalles/:id', component: DetallesCoches
    },
    {
        path: '/edit/:id', component: EditCoches
    },
    {
        path: '/insert', component: InsertCoche
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;