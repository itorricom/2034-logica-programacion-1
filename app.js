//Variables
let numeros = prompt('Ingrese hasta que numero generar aleatorios:');
let numeroSecreto = Math.floor(Math.random() *numeros)+1;
console.log(numeroSecreto);
let numeroUsario = 0;
let intento = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;

while (numeroUsario!=numeroSecreto) {
    numeroUsario = parseInt( prompt(`Dame un numero entre 1 y ${numeros} `));
    
    /*
    Este codigo realiza
    la comparacion
    */

    if (numeroSecreto == numeroUsario) {
        //Acetamos, fue verdadera la condicion
        alert(`Acertaste, el numero es ${numeroSecreto}. lo hiciste en ${intento} ${intento ==1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        //La condicion no se cumplio
        //alert("No acertaste el numero");
        //incrementamos el contador
        //intento = intento + 1;
        //intento +=1 ;
        intento++;
        palabraVeces = 'veces';
        if(intento > maximoIntentos){
            alert(`Llegaste al numero maximo de ${maximoIntentos} intentos `);
            break;
        }

    }
}

/* 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
 */

/* console.log("bienvenida"); */

/* 2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
 */

/* let nombre = 'Isidoro Torrico Mamani';
console.log(`¡Hola, ${nombre}`); */

/* 3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
 */

/* let nombre1 = 'Isidoro Torrico Mamani';
alert(`¡Hola, ${nombre1}`); */

/* 4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador. */

/* let mensaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`Ohh,${mensaje}`); */

/* 5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola. */

/* let valor1 = 5, valor2 = 3, resultado;
resultado = valor1 + valor2;
console.log(resultado); */


/* 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola. */

let valor1 = 5, valor2 = 3, resultado;
resultado = valor1 - valor2;
console.log(resultado);

/* 7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola. */

/* 8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente. */

/* 9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola. */

/* 10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola. */

/* 11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola. */

/* 12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola. */

/* 13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. */



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

