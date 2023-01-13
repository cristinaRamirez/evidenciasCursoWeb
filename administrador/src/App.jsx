import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Listado } from "./components/Listado"


function App() {
const [alumnos,setAlumnos]=useState([]);

  return (
   <div className="container mx-auto mt-11">
    <Header/>
    <div className="container mt-12 flex">
    <Formulario
    setAlumnos={setAlumnos}/>
    <Listado/>
    </div>
   </div>
  )
}

export default App
