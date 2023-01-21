/* Angie Melissa Rincón Cely 
Ahí hice modificaciones pero si te fijas no me esta tomando como quiero que suceda
*/


function datosReserva(){
    let nombreIngresado;
    do {
        nombreIngresado = prompt("Ingresar nombre: ");

        if (!nombreIngresado)
        console.log("Por favor ingrese su nombre");

        if (!isNaN(nombreIngresado))
        console.log("Por favor ingrese su nombre");

    } while(!nombreIngresado)
    console.log("El nombre ingresado es " + nombreIngresado);

    let apellidoIngresado;
    do {
        apellidoIngresado = prompt("Ingresar apellido: ");
        if (!apellidoIngresado)
        console.log("Por favor ingrese su apellido");
        if (!isNaN(apellidoIngresado))
        console.log("Por favor ingrese su apellido");
    } while(!apellidoIngresado)
    console.log("El apellido ingresado es " + apellidoIngresado);
}
datosReserva(); 

let cantidadHuespedes;
    do {
        cantidadHuespedes = prompt("Seleccione cantidad de huéspedes: ");

        if(!cantidadHuespedes)
        console.log("Ingrese número");

        if(isNaN(cantidadHuespedes))
        console.log("Ingrese un número");

    } while(!cantidadHuespedes)
    console.log("La reserva se realizara para " + cantidadHuespedes + " personas.");

function calendario() {

    let fechaIngreso;
    do {
        fechaIngreso = prompt("Ingrese fecha de check-in:");

        if(!fechaIngreso)
        console.log("Ingrese fecha en formato dia/mes/año");

        if(isNaN(fechaIngreso))
        console.log("Ingrese fecha en formato dia/mes/año");

    } while (isNaN(fechaIngreso))
    console.log("La fecha de check-in: " + fechaIngreso);
    
    let fechaSalida;
    do {
        fechaSalida = prompt("Ingrese fecha de check-out:");

        if(!fechaSalida)
        console.log("Ingrese fecha en formato dia/mes/año");

        if(isNaN(fechaSalida))
        console.log("Ingrese fecha en formato dia/mes/año");

    } while (isNaN(fechaSalida))
    console.log("la fecha de check-out: " + fechaSalida)
}
calendario();

    let opciones = prompt("Elegí el hospedaje que deseas: \n1-Hotel. \n2-Cabaña. \n3-Camping. \nPresiona X para finalizar." );
    while(opciones !='X' && opciones !='x'){
        /* Opciones del menu */
        switch (opciones) {
            case '1':
                alert("Seleccionaste Hotel" );
                break;
            case '2':
                alert("Seleccionaste Cabaña");
                break;
            case '3':
                alert("Seleccionaste Camping");
                break;
            default:
                alert("Elegiste una opción inválida");
                break;
        } 
        opciones = prompt("\nPresiona X para finalizar." );
    }   

    alert('Reserva realizada con éxito') 


class Persona {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
   
   printPersona() {
    console.log(`La reserva se realizo a nombre de ${this.nombre} ${this.apellido}`);
   }

   getNombre(){
    return this.nombre;
   }
}
