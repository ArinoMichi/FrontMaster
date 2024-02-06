import { createWebHistory, createRouter } from "vue-router";
import HomeTienda from "../src/components/Home.vue";
import Login from "../src/components/Login.vue";
import CubosMarca from "../src/components/CubosMarca.vue";
import ComentariosCubo from "../src/components/ComentariosCubo.vue";
import UserInfo from "../src/components/User.vue";
import Registraruser from "../src/components/RegistrarUser.vue";
import ComprasUsuario from "../src/components/ComprasUsuario.vue";
import RealizarCompra from "../src/components/RealizarCompra.vue";
import DetallesCubo from "../src/components/DetallesCubo.vue"

const myRoutes = [
  {
    path: "/",
    component: HomeTienda,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/cubosmarca/:marca",
    component: CubosMarca,
  },
  {
    path: "/comentarioscubo/:id",
    component: ComentariosCubo
  },
  {
    path: "/userinfo", component: UserInfo
  },
  {
    path: "/registraruser", component: Registraruser
  },
  {
    path: "/comprasusuario", component: ComprasUsuario
  },
  {
    path: "/comprar", component: RealizarCompra
  },
  {
    path: "/detallescubo/:id", component: DetallesCubo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
