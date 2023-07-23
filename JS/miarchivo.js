/*
Condicionales
Bucles
Utilizar funciones
Algoritmo: Son instrucciones que describen paso a paso cómo ejecutar una acción
*/

let nombre = prompt("Gracias por ingresar a mi portafolio, ¿Cuál es tu nombre?");
let pregunta = prompt(`Hola, ${nombre} ¿Quieres comprar fotos?`) .toLowerCase();

let precioInicial = 990
let descuento = 50
let precioPorFoto= " "

function calculoPrecioPorFoto(a,b,c){
        return (a-(b*c));
}
function calculoTotal(a){
    switch(a){
        case 1: 
            return 990*a;
            break;
        case 2:
            return 940*a;
            break;
        case 3:
            return 890*a;
            break;
        case 4:
            return 840*a;
            break;
        case 5:
            return 790*a;
            break;
        default:
            return 700*a;
            break;
    }
}
if(pregunta == "si"){
    for(let i = 0; i <= 4; i++){
        precioPorFoto = calculoPrecioPorFoto(precioInicial, descuento, i);
        alert(`Si llevas ${i+1} producto(s) el precio de cada foto es de $${precioPorFoto}CLP`);
    }
    let masFotos = prompt("¿Llevas más de 5 fotos?") .toLowerCase()
    if(masFotos == "si"){
        alert("Por más de 5 fotos el precio de cada una es de $700CLP")
    }else{
        alert("¡Entonces sigamos!")
    }
    alert("Calculemos el total de tus productos:")
    let cantidadFotos = parseInt(prompt("¿Cuántas fotos llevas?"))
    let precioFinal= alert(`El precio final es de $${calculoTotal(cantidadFotos)}CLP`)
}else{
    alert("¡Ouh! No te preocupes, disfruta de mi galeria")
}