
import React, {useState} from 'react'

export const Formulario = ({setAlumnos}) => {
    //Hooks
    const[nombre,setNombre]=useState('');//valores por default
    const[correo,setCorreo]=useState('');
    const[grupo,setGrupo]=useState('');
    const[carrera,setCarrera]=useState('');
    const[fechaNacimiento,setFechaNacimiento]=useState('');
    const[observaciones,setObservaciones]=useState('');
    //no se puede modificar un Hook directamente: p. ej. setNombre('Peter);

    const [error,setError]=useState(false);
  

    //funcion para obtener lo del formulario
    const handleSubmit = (e) =>{
        e.preventDefault();//para prevenir que se este refrestando el sitio cada vez que presionen el boton
        //validacion de campos, sale esto si falta algun dato en el formulario
        if([nombre,correo,grupo,carrera,fechaNacimiento,observaciones].includes('')){
            console.log('tiene una cadena vacia');
            setError(true);
            return;//se puso esto para evitar el else
        }
         // else
        //console.log('todo ok');
        setError(false);//si llega aqui es que no hay error
       
       const objetoEstudiante={
        nombre,
        correo,
        grupo,
        carrera,
        fechaNacimiento,
        observaciones
    }
      setAlumnos(objetoEstudiante);//le enviamos a setAlumnos el objetoEstudiante
      limpiarCampos();//mandamos llamar la funcion
    }
    //funcion
    const limpiarCampos=()=>{
        setNombre('');
        setCorreo('');
        setGrupo('');
        setCarrera('');
        setFechaNacimiento('');
        setObservaciones('');
    }

  return (
    <div className='md:w-1/2 lg:w-2/5 bg-slate-200 '>
        <h2 className='font-black text-2xl text-center'>Seguimiento de estudiantes</h2>
    <p className='text-sm mt-5 text-center py-5'>
        Agrega a estudiantes y <span className='text-red text-2xl'>administralos
        </span>
    </p>
    <form className='bg-white shadow-md rounded-lg py-10 px-5'
        onSubmit={handleSubmit}
    >
        {
            error&&
            (
                <div>
                    <p className='bg-red-800 text-center text-white py=3'>Hay un error</p>
                </div>

            )
        
        }
        <div>
            <label htmlFor='nombre' className='block text-gray-800 uppercase'>Nombre del estudiante</label>
            <input id='nombre'
                    type="text"
                   placeholder='nombre estudiante'
                   className='border-2 w-full p-2 placeholder-blue-300 rounded-md' 
                   value={nombre}
                   onChange={(e)=>setNombre(e.target.value)}
                   />
        </div> 
        <div className='py-5'>
            <label htmlFor='correo' className='block text-gray-800 uppercase'>Correo</label>
            <input id='correo'
                    type="email"
                   placeholder='correo estudiante'
                   className='border-2 w-full p-2 placeholder-blue-300 rounded-md' 
                   value={correo}
                   onChange={(e)=>setCorreo(e.target.value)}
                   />
        </div>
        <div className='py-5'>
            <label htmlFor='grupo' className='block text-gray-800 uppercase'>Grupo</label>
            <input id='grupo'
                    type="text"
                   placeholder='grupo estudiante'
                   className='border-2 w-full p-2 placeholder-blue-300 rounded-md' 
                   value={grupo}
                   onChange={(e)=>setGrupo(e.target.value)}
                   />
        </div>
        <div className='py-5'>
            <label htmlFor='carrera' className='block text-gray-800 uppercase'>Carrera</label>
            <input id='carrera'
                    type="text"
                   placeholder='carrera estudiante'
                   className='border-2 w-full p-2 placeholder-blue-300 rounded-md' 
                   value={carrera}
                   onChange={(e)=>setCarrera(e.target.value)}
                   />
        </div>
        <div className='py-5'>
            <label htmlFor='fechaNacimiento' className='block text-gray-800 uppercase'>Fecha nacimiento</label>
            <input id='fechaNacimiento'
                    type="date"
                   placeholder='carrera estudiante'
                   className='border-2 w-full p-2 placeholder-blue-300 rounded-md' 
                   value={fechaNacimiento}
                   onChange={(e)=>setFechaNacimiento(e.target.value)}
                   />
        </div>
        <div className='py-5'>
            <label htmlFor='observaciones' className='block text-gray-800 uppercase'>observaciones</label>
           <textarea name="" id="observaciones" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           value={observaciones}
           onChange={(e)=>setObservaciones(e.target.value)}
           />
        </div>
        <input type='submit' 
        className='bg-indigo-500 w-full p-3 text-white uppercase font-serif hover:bg-slate-800 cursor-wait'
                />
       

    </form>

        </div>
  )
}
