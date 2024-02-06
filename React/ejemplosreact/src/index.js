import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros/SumarNumeros';
import SaludoPadre from './components/SaludoPadre';
import SaludoHijo from './components/SaludoHijo';
import Matematicas from './components/Matematicas';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car marca="Audi" modelo="Q7" aceleracion="30" velocidadmaxima="230"/>
    <Car marca="Pontiac" modelo="Firebird" aceleracion="40" velocidadmaxima="320"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
