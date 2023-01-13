
import { useState } from 'react'
import './App.css'
import { Boton } from './components/boton'
import { Pantalla } from './components/Pantalla'

function App() {

  const [valor, setValor] = useState(0)

  const contarClick=()=>{
    console.log('se hizo click');
    setValor(valor+1);
  }

  const reiniciarValor=()=>{
    console.log('se reinicio el valor');
   setValor(0);
  }

  return (
    <div className="App">
      <Pantalla numero={valor}/>
   <Boton texto='click' funcion={contarClick} manejarTipoBtn={true}/>
   <Boton texto='reiniciar' funcion={reiniciarValor} manejarTipoBtn={false}/>

    </div>
  )
}

export default App
