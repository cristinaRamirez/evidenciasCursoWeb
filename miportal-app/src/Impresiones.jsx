


export const Impresiones = () => {
    const estudiante1='Cristina'
    const estudiantes=["Petra","Jose","Maria"]
  return (
   <>
   <h1>Mis estudiantes</h1>
   <ol>
        <li>{estudiante1}</li>
       {
            estudiantes.map((estudiante,key)=>
                {
                    return <li key={key}>{estudiante}</li>
                }
                )
            }

        
     
   </ol>
   </>
  )
}
