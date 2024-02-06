import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'


var app = createApp(App);

app.config.globalProperties.$filters = {
    evaluarNumero(num){
        if(num%2==0){
            return "<span style='color:green'>"+num+"</span>";
        }else{
            return "<span style='color:red'>"+num+"</span>";
        }
    },
    generarTabla(num){
        var html = "<table> <tbody>"
        for (let i = 0; i < 10; i++) {
            html+= " <tr>";
            html += "<td>" + num + " * " + i + "</td>";
            html += "<td>" + num * i + "</td>";
            html += "</tr>";
        }
        html +="</tbody></table>"
        return html;
    }
}

app.use(router).mount('#app');