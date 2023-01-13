const tecnologias=['Javascript','Java','React','php','Phyton'];

const tech01=tecnologias.map(lenguaje=>{

    if(lenguaje=='React'){
        return 'Tecnologia detectada';
    }
    else{
        return lenguaje;
    }
});

console.log(tech01);

//filtro el arreglo y solo dejo el elemento que coincidio
const tech02=tecnologias.filter(lenguaje=>{
        return lenguaje=='Java';

});

console.log(tech02);

const edades=[20,40,60,30,50,12,5,50,3,24,56,25,24,6,78,12];

console.log(edades);

//1 filtrar los que son mayores a 30
const tech03=edades.filter(lenguaje=>{
    return lenguaje>30;

});
console.log(tech03);
//lo mismo que 1 pero mas facil
const tech04=edades.filter( lenguaje=> lenguaje>30);
console.log(tech04);

//regresa la primer coincidencia encontrada
const arrFind=edades.find( lenguaje=> lenguaje>30);
console.log(arrFind);

//es como una pregunta, si cumplen todos regresa verdadero, si no regresa falso
const arrEvery=edades.every( edad=> edad>1);
console.log(arrEvery);

const arrReduce = edades.reduce((total,edad) => edad + total,0 );
console.log(arrReduce);


