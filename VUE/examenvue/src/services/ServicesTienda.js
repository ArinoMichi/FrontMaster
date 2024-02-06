import axios from "axios";
import Global from "@/Global";

export default class ServiceTienda {
  autorizarAcceso(username, password) {
    return new Promise((resolve, reject) => {
      const json = {
        email: username,
        password: password,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      const request = "api/Manage/Login";
      const url = Global.urlApiTienda + request;

      axios
        .post(url, json, { headers })
        .then((response) => {
          Global.token = response.data.response;
          resolve(response); // Resuelve la promesa con la respuesta
        })
        .catch((error) => {
          console.error("Error en la solicitud HTTP:", error);
          reject(error); // Rechaza la promesa con el error
        });
    });
  }

  crearUsuario(json) {
    return new Promise((resolve, reject) => {
      const headers = {
        "Content-Type": "application/json",
      };

      const request = "api/Manage/RegistroUsuario";
      const url = Global.urlApiTienda + request;

      axios
        .post(url, json, { headers })
        .then((response) => {
          Global.token = response.data.response;
          resolve(response); // Resuelve la promesa con la respuesta
        })
        .catch((error) => {
          console.error("Error en la solicitud HTTP:", error);
          reject(error); // Rechaza la promesa con el error
        });
    });
  }

  verperfil() {
    console.log(Global.token);
    return new Promise(function (resolve) {
      const headers = {
        Authorization: "bearer " + Global.token,
      };
      var request = "api/Manage/PerfilUsuario";
      var usuario = {};
      var url = Global.urlApiTienda + request;
      axios.get(url, { headers }).then((response) => {
        usuario = response.data;
        resolve(usuario);
      });
    });
  }

  verCompras() {
    return new Promise(function (resolve) {
      const headers = {
        Authorization: "bearer " + Global.token,
      };
      var request = "api/Compra/ComprasUsuario";
      var compras = [];
      var url = Global.urlApiTienda + request;
      axios.get(url, { headers }).then((response) => {
        compras = response.data;
        console.log(compras);
        resolve(compras);
      });
    });
  }

  hacerCompra(id) {
    console.log(Global.token)
    return new Promise(function (resolve) {
      const headers = {
        Authorization: "bearer " + Global.token,
      };
      var body= null;
      var request = "api/Compra/InsertarPedido/" + id;
      console.log(request)
      var url = Global.urlApiTienda + request;
      axios.post(url, body,{ headers }).then((response) => {
        resolve(response);
      });
    });
  }

  getCubos() {
    return new Promise(function (resolve) {
      var request = "api/Cubos";
      var cubos = [];
      var url = Global.urlApiTienda + request;
      axios.get(url).then((response) => {
        cubos = response.data;
        resolve(cubos);
      });
    });
  }

  getCubosID(id) {
    return new Promise(function (resolve) {
      var request = "api/Cubos/" + id;
      var cubo = {};
      var url = Global.urlApiTienda + request;
      axios.get(url).then((response) => {
        cubo = response.data;
        resolve(cubo);
      });
    });
  }

  getCubosMarca(marca) {
    return new Promise(function (resolve) {
      var request = "api/Cubos/CubosMarca/" + marca;
      var cubos = [];
      var url = Global.urlApiTienda + request;
      axios.get(url).then((response) => {
        cubos = response.data;
        resolve(cubos);
      });
    });
  }

  getMarcas() {
    return new Promise(function (resolve) {
      var request = "api/Cubos/Marcas";
      var marcas = [];
      var url = Global.urlApiTienda + request;
      axios.get(url).then((response) => {
        marcas = response.data;
        resolve(marcas);
      });
    });
  }

  getComentariosCubo(idCubo) {
    return new Promise(function (resolve) {
      var request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
      var comentarios = [];
      var url = Global.urlApiTienda + request;
      axios.get(url).then((response) => {
        comentarios = response.data;
        resolve(comentarios);
      });
    });
  }
}
