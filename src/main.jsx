import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
); //Toda mi aplicación App va a tener acceso al sistema de rutas. 
//Activa la navegación para todo lo que esté dentro.
//Se pone en main.jsx porque queremos que toda la App tenga acceso a las rutas. Si lo ponemos en App.jsx, solo los componentes dentro de App tendrán acceso a las rutas.