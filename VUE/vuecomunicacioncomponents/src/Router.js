import { createWebHistory,createRouter } from "vue-router";
import ComicsComponent from "./components/ComicsComponent";
import PadreNumeros from "./components/PadreNumeros";
import PadreDeportes from "./components/PadreDeportes";
import SeleccionMultiple from "./components/SeleccionMultiple";
import CheckboxComponent from "./components/CheckboxComponent";
import NumeroDoble from "./components/NumeroDoble";
import TablaComponent from "./components/TablaComponent";

const myRoutes = [
    {
        path: "/comics", component: ComicsComponent
    },
    {
        path: "/numeros", component: PadreNumeros
    },
    {
        path: "/deportes", component: PadreDeportes
    },
    {
        path: "/seleccionMultiple", component: SeleccionMultiple
    },
    {
        path: "/checkbox", component: CheckboxComponent
    },
    {
        path: "/numerodoble/:numero?", component: NumeroDoble
    },
    {
        path: "/tabla/:numero", component: TablaComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;