import axios from "axios";
import Global from "@/Global";

export default class ServiceAlumnos {
  getAlumnos() {
    return new Promise(function (resolve) {
      var request = "api/Alumnos";
      var url = Global.urlApiAlumnos + request;
      var alumnos = [];
      axios.get(url).then((response) => {
        alumnos = response.data;
        resolve(alumnos);
      });
    });
  }
}
