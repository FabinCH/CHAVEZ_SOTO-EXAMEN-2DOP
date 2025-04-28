//1. convertir la siguiente funcion a una funcion flecha (1p)
function cuadrado(numero) {
    return numero * numero;
}
console.log(cuadrado(5));


let elevarCuadrado = (numero) =>numero*numero;
console.log(elevarCuadrado(5));

// Dado el siguiente arreglo:
let pizzas=[
    {
        id:1,
        nombre: "Hawaiana",
        precio: {grande: 95, mediana:70, pequeña: 50}
    },
    {
        id:2,
        nombre: "Vegetariana",
        precio: {grande: 100, mediana:85, pequeña: 65}
    },
    {
        id:3,
        nombre: "4 estaciones",
        precio: {grande: 150, mediana:120, pequeña: 90}
    },
    {
        id:4,
        nombre: "Napolitana",
        precio: {grande: 95, mediana:70, pequeña: 60}
    },
   
]

//2. Cambiar el nombre de la pizza con id 3 a Carbonara (2p)
//3. Crear otra funcion que muestre todas las pizzas que de tamaño mediano menor a 80 bolivianos (3p)
//4. Crear una funcion callback que acepte un arreglo de numeros y una funcion callback donde duplique cada elemento del arreglo (3p)


function procesarArreglo(arreglo, callback) {
    let resultado = arreglo.map(callback); 
    console.log("Arreglo procesado:", resultado);
}

function duplicar(numero) {
    return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];
procesarArreglo(numeros, duplicar);

/* 5. Utiliza el metodo prompt para  que el usuario pueda agregar un objeto pizza al final del arreglo con los datos que el desee 
y muestre en la consola el nuevo arreglo (4p) NOTA. PARA ESTO TENDRAS QUE CREARTE  OTRO ARCHIVO HTML Y OTRO ARCHIVO JS*/ 
//6. Usando los metodos setTimeOut y setInterval crear un contador que disminuya del 5 al 0 (2p)

let intervalID = setInterval(() => console.log("5"), 2000);
let intervalID1 = setInterval(() => console.log("4"), 3000);
let intervalID3 = setInterval(() => console.log("3"), 4000);
let intervalID4 = setInterval(() => console.log("2"), 5000);
let intervalID5 = setInterval(() => console.log("1"), 6000);
let intervalID6 = setInterval(() => console.log("0"), 7000);
setTimeout(() => {
    clearInterval(intervalID)
}, 3000);
setTimeout(() => {
    clearInterval(intervalID1)
}, 4000);setTimeout(() => {
    clearInterval(intervalID3)
}, 5000);setTimeout(() => {
    clearInterval(intervalID4)
}, 6000);setTimeout(() => {
    clearInterval(intervalID5)
}, 7000);setTimeout(() => {
    clearInterval(intervalID6)
}, 8000);