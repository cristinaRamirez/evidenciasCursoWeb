const arr=['pan','manzana','queso','pavo'];
console.log(arr);//se imprime todo
console.log(arr[0]);//el de una posicion
console.log(arr[40]);

//para agregar un elemento al arreglo se usa push
arr.push(40);
arr.push("hola");
arr.push({
    nombre:'cristina',
    edad:40
})

//1. arreglo que itera con respecto al contenido del array
for(const item of arr){
    console.log(item);
}



//2. arreglo que itera con respecto al indice del array
for(const item in arr){
    console.log(item);
}



//arreglo que itera con respecto al contenido del array
//asi este 2 se hace 1
for(const item in arr){
    console.log(arr[item]);

}
//arreglo con la sintaxis tradicional
//for(let i=0; i<arr.length;i++){
//    console.log(arr[i]);//el de una posicion
//}

//para eliminar un elemento al arreglo se usa pop
arr.unshift('platano');//agrega al inicio
arr.pop();//elimina el ultimo
arr.splice(3,1);//elimina el elemento de esa posicion
arr.splice(3,0,'otra comida');//inserta el elemento de esa posicion
arr.splice(3,1,'otra comida');//reemplazar el elemento de esa posicion
//arreglo que itera con respecto al contenido del array
//asi este 2 se hace 1
for(const item in arr){
    console.log(arr[item]);

}

console.log(arr.pop());//imprime el ultimo que se elimino
console.log(arr.shift());//imprime el primero eliminado




