const personajes=['Iron man','Spiderman','Thor','Mujer maravilla'];

const [d]=personajes;
const [,,a]=personajes;
console.log(d);//imprime por default el primer elemento
console.log(a);//imprime por default el primer elemento

//funcion que regresa dos valores
const regresaArreglo=()=>{
    return ['ABC',123]
}

const [c,e]=regresaArreglo();//destructuracion de lo que regresa la funcion
console.log(c,e);//imprime por default el primer elemento

//funcion que recibe un valor y regresa ese valor y lo que regresa la funcion
const useState=(valor)=>{
    return [valor, ()=>{console.log('Hola mundo')}]
}

//en este arreglo guardamos lo que regresa la funcion
const arr=useState('Javascript');
console.log(arr);

//para obtener la segunda posicion del arreglo sin destructuring
arr[1]();

//para imprimir lo que regresa la posicion 0
console.log(arr[0]);

//A tarea: desestructurar el arreglo y la funcion debera llamarse getSaludo
const [,getSaludo]=useState();

getSaludo();//obtener la posicion 2 con el destructuring A

