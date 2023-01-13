import React from 'react';
import ReactDOM from 'react-dom/client';
import { App3 } from './MiPrimerComponente';
import { Personajes } from './Personajes';
import { App, App2 } from './PrimeraApp';
import './estilos.css'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    {/* <App/> */}
    <App2/>
    <Personajes/>
    {/* <App3/> */}
</React.StrictMode>
); 