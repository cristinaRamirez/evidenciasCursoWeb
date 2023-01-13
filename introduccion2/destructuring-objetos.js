//desctructuracion
const nombre='cristina';

const persona={
    nombre:"Peter Parker",
    edad: 20,
    clave:'Spiderman'
};

//para destructurar
const {nombre:nombre2} =persona;
console.log(nombre2);

//para destructurar
const {edad,clave} =persona;
console.log(edad);
console.log(clave);

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log(`Hola ${nombre2}, tienes ${edad} anios y eres ${clave}`);

// a. funcion imprimir una persona
const imprimePersona=(usuario)=>{
const {nombre,edad,clave}=persona;
//console.log(nombre);
//console.log(edad);
//console.log(clave);
console.log(`Hola ${nombre}, tienes ${edad} anios y eres ${clave}`);
}

imprimePersona(persona);

// es lo mismo que a. funcion imprimir una persona
const imprimePersona2=({nombre,edad,clave})=>{
    //console.log(nombre);
    //console.log(edad);
    //console.log(clave);
    console.log(`Hola ${nombre}, tienes ${edad} anios y eres ${clave}`);
    }
    
    imprimePersona2(persona);

//a la destructuracion se le pueden agregar variables nuevas
// es lo mismo que a. funcion imprimir una persona
const imprimePersona3=({nombre,edad,clave,superPoder='lanzar piedras'})=>{
    //console.log(nombre);
    //console.log(edad);
    //console.log(clave);
    console.log(`Hola ${nombre}, tienes ${edad} anios, eres ${clave} y tu super poder es ${superPoder}`);
    }
    
    imprimePersona3(persona);


 //la destructuracion tambien puede regresar un objeto
const imprimePersona4=({nombre,edad,clave,superPoder='lanzar piedras'})=>{
        //console.log(`Hola ${nombre}, tienes ${edad} anios, eres ${clave} y tu super poder es ${superPoder}`);
        return{
            nombreClave:clave,
            nombreSuperpoder:superPoder
        }
    }
    
    const avenger=imprimePersona3(persona);

    //esto ultimo no entendi
    const {nombreClave, nombreSuperpoder} = avenger;

    console.log(heroe);