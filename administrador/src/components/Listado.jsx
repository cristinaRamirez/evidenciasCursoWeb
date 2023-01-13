import React from 'react'
import { Estudiante } from './Estudiante'

export const Listado = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 bg-slate-100 h-screen overflow-y-scroll'>
    <h2 className='font-black text-2xl text-center'>Lista de estudiantes</h2>
    <p className='text-sm mt-5 text-center py-5'>
     Administra a tus <span className='text-red text-2xl'>estudiantes y citas
     </span>
     </p>
        <Estudiante/>
        <Estudiante/>
        <Estudiante/>
        <Estudiante/>

    </div>
  )
}
