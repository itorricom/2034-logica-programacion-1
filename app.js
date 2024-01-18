//Variables

let numeroSecreto = 5;
let numeroUsario = 0;
let intento = 1;
let palabraVeces = 'vez';

while (numeroUsario!=numeroSecreto) {
    numeroUsario = prompt("Dame un numero entre 1 y 10: ");
    console.log(numeroUsario);

    /*
    Este codigo realiza
    la comparacion
    */

    if (numeroSecreto == numeroUsario) {
        //Acetamos, fue verdadera la condicion
        alert(`Acertaste, el numero es ${numeroSecreto}. lo hiciste en ${intento} ${palabraVeces}`);
    } else {
        if (numeroUsario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secret es mayor");
        }
        //La condicion no se cumplio
        //alert("No acertaste el numero");
        //incrementamos el contador
        intento = intento + 1;
        palabraVeces = 'veces';
        if(intento > 3){
            alert("Llegaste al numero maximo de intentos");
            break;
        }

    }
}

/* Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número. */
/* let contador = 1;
while (contador<11){
    console.log(contador);
    contador++;
} */


/* Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número. */
/* let contador = 10;
while (contador>=0){
    console.log(contador);
    contador--;
} */

/* Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */
/* let numero = prompt("Ingrese un numero: ");
while (numero >= 0){
    console.log(numero);
    numero--;
} */

/* Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */

/* let numero = prompt("Ingrese un numero: ");
let contador =0;
while (contador<=numero){
    console.log(contador);
    contador++;
} */

//incorrecto
/* let porcentajeDescuento = 0;
let cantidadMillas = prompt("Millas: ");

if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;
    console.log(porcentajeDescuento);
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
    console.log(porcentajeDescuento);
} else {
    porcentajeDescuento = 0;
    console.log(porcentajeDescuento);
} */

//correcto
/* let porcentajeDescuentos = 0;

if (cantidadDeMillas > 30000) {
    porcentajeDescuentos = porcentajeDescuentos + 20;
} else {
    if (cantidadDeMillas > 5000) {
        porcentajeDescuentos = porcentajeDescuentos + 10;
    }
} */

/* Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */
/* let dia = prompt("Ingrese el dia: ");
if (dia =="Sabado" || dia == "Domingo") {
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
} */

/* Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. */
/* let numero = prompt("Número:" );
if (numero >= 0) {
    alert("POSITIVO");
}else{
    alert("NEGATIVO");
}
 */

/* Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.". */
/* let puntacion = prompt("Puntuación: ");
if(puntacion >=100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intenta nuevamente para ganar.");
} */

/* Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo. */
/* let saldo = 100;
alert(`Su saldo es: ${saldo}`); */

/* Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
 */
/* let nombre = prompt("Ingrese su nombre: ");
alert(`Bienvenido: ${nombre}`); */



/*
let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert('mensajeDeBienvenida');

alert("¡Bienvenida y bievenido a nuestro sitio web!");
let nombre = 'Lunar';
let edad = 25;
let numeroDeVentas = 5;
let saldoDisponible = 1000;
alert("¡Error! Completa todos los campos");
let mensajeDeError  = "¡Error! Completa todos los campos";
nombre = prompt('Ingrese el nombre:');
edad = prompt('Ingrese la edad:');
if (edad >= 18){
    alert('¡Puedes obtener tu licencia de conducir!');
}*/

