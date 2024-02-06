import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';
import DirectivasComponent from './components/DirectivasComponent.vue';
import PropiedadConmutada from './components/PropiedadConmutada';

//CREAMOS UNA CONSTANTE ARRAY PARA NUESTRAS RUTAS
const myRoutes=[{
    path: "/", component: HomeComponent
},
{
    path: "/musica", component: MusicaComponent
},
{
    path: "/cine", component:CineComponent
},
{
    path: "/ciclovida", component: CicloVida
},
{
    path: "/directivas", component: DirectivasComponent
},
{
    path: "/propiedad", component: PropiedadConmutada
}
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL Y EL ARRAY DE RUTAS
//DICHA CONSTANTE SERA LA QUE ULTILIZAREMOS DENTRO DE MAIN.JS

const router = createRouter({
    history: createWebHistory(),
    routes : myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE router
export default router;