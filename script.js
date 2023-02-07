
// constantes por kilo

const manzana = 30;
const pera = 40;
const banana = 10; 
const mandarina = 25;

// array con viejos clientes

const clientes = [{nombre: "juan", satisfaccion: 7}, {nombre: "marcelo", satisfaccion: 10}]

// agregar nombre


nombre.addEventListener("change", agregarNombre)

function agregarNombre () {
    let respuesta = document.getElementById("nombre").value;
    document.getElementById("bienvenida").innerText = "bienvenido a tu simulador de verduleria, " +respuesta
}

//pasar json a pagina de clientes

nombre.addEventListener("change", setCliente)

function setCliente () 

// calculadora de precios

let cantManzana = document.getElementById("cantManzana").value;
let cantPera = document.getElementById("cantPera").value;
let cantBanana = document.getElementById("cantBanana").value;
let cantMandarina = document.getElementById("cantMandarina").value;

console.log(cantManzana)
console.log(cantPera)
console.log(cantBanana)
console.log(cantMandarina)

let botonTotal = document.getElementById("botonTotal")



function suma(cantManzana, cantPera, cantBanana, cantMandarina){
    let resultado = (cantManzana) + (cantPera) + (cantBanana) + (cantMandarina);
    document.getElementById("total").innerText = "el total es de " + resultado
}

botonTotal.onclick = () => {suma(cantManzana, cantPera, cantBanana, cantMandarina)}

