import { personajes } from "./data/data"




export const Personajes = () => {
    console.log(personajes)
    // const nombre=[personajes[0].nombre,personajes[1].nombre,personajes[2].nombre,personajes[3].nombre]
    // const superPoder=[personajes[0].superpoder,personajes[1].superpoder,personajes[2].superpoder,personajes[3].superpoder]
  return (
    <>
   <h1>Mis super heroes</h1>
   <ol>
        
       {
            personajes.map((n, key)=>
                {
                    return <li key={key}>Personaje {n.nombre}, super poder {n.superpoder} </li>
                }
                )
        }
        {/* {
            superPoder.map((s,key)=>
                {
                    return <li key={key}>Super poder {s}</li>
                }
                )
        } */}

        
     
   </ol>
   </>
  )
}
