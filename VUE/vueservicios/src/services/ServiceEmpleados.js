import Global from "@/components/Global";
import axios from "axios";

export default class ServiceEmpleados {
  constructor() {
    this.urlEmpleados = Global.urlApiEmpleados;
  }

  getEmpleados() {
    return new Promise(function (resolve) {
      var request = "api/Empleados";
      var url = Global.urlApiEmpleados + request;
      var empleados = [];
      axios.get(url).then((response) => {
        empleados = response.data;
        resolve(empleados);
      });
    });
  }
  buscarEmpleados(idEmp) {
    return new Promise(function (resolve) {
      var request = "api/Empleados/" + idEmp;
      var url = Global.urlApiEmpleados + request;
      var empleado = null;
      axios.get(url).then((response) => {
        empleado = response.data;
        resolve(empleado);
      });
    });
  }
  getOficios() {
    return new Promise(function (resolve) {
      var request = "api/Empleados/oficios";
      var url = Global.urlApiEmpleados + request;
      var oficios = [];
      axios.get(url).then((response) => {
        oficios = response.data;
        resolve(oficios);
      });
    });
  }
  getEmpleadosOficios(oficio) {
    return new Promise(function (resolve) {
      var request = "api/Empleados/EmpleadosOficio/" + oficio;
      var url = Global.urlApiEmpleados+ request;
      var empleados= [];
      axios.get(url).then((response) => {
        empleados = response.data;
        resolve(empleados);
      });
    });
  }
}
