//funcion como la conocemos
function saludar(nombre){
    return `Hola ${nombre}`;
}

//funciones de flecha, es lo mismo que funcion pero con otra sintaxis
const saludar2 = (nombre)=>{
    return `Hola ${nombre}`;
}

const saludo=saludar('paco');
console.log(saludo);

console.log(saludar('Cristina'));

console.log(`saludando a ${saludar('Xenia')}`);

const arr=['arroz','pasta','leche'];

console.log(arr);


arr.map(function item(elemento){
console.log(elemento)
})


//para hacer una copia del arreglo se usa esto
arr.map( elemento=>{
    console.log(elemento)
    })

const newArr=arr.map(elemento =>{
    return elemento.toUpperCase();
})    

console.log(newArr);
    
