/* Angie Melissa Rincón Cely 
Esto es un simulador de reservas 
en el sitio web solo ir a page hospedaje es donde esta vinculado con js 
por ahora se maneje correciones sencillas que esten en string nombre apellido 
en Number huespedes y fechas y las opciones que esten dentro del rango de elegir.
Fecha esta pensado por ahora solo con numero de día ya que el uso del DATE no se ha visto.
*/


function datosReserva(){
    let nombreIngresado;
    do {
        nombreIngresado = prompt("Ingresar nombre: ");
        if (!isNaN(nombreIngresado) === false)
        console.log("Por favor ingrese su nombre");
    } while(isNaN(nombreIngresado) === false)
    console.log("El nombre ingresado es " + String(nombreIngresado));

    let apellidoIngresado;
    do {
        apellidoIngresado = prompt("Ingresar apellido: ");
        if (!isNaN(apellidoIngresado) === false)
        console.log("Por favor ingrese su apellido");
    } while(isNaN(apellidoIngresado) === false)
    console.log("El apellido ingresado es " + String(apellidoIngresado));
    
    let cantidadHuespedes;
    do {
        cantidadHuespedes = prompt("Seleccione cantidad de huéspedes: ");
        if(isNaN(cantidadHuespedes) === true)
        console.log("Ingrese número");
    } while(isNaN(cantidadHuespedes)=== true)
    console.log("La reserva se realizara para " + (Number(cantidadHuespedes)) + " personas.");

    let fechaIngreso;
    do {
        fechaIngreso = prompt("Ingrese fecha de check-in:");
        if(isNaN(fechaIngreso) === true)
        console.log("Ingrese valores numéricos");
    } while (isNaN(fechaIngreso) === true)
    console.log("La fecha de check-in: " + Number(fechaIngreso));
    
    let fechaSalida;
    do {
        fechaSalida = prompt("Ingrese fecha de check-out:");
        if(isNaN(fechaSalida)=== true)
        console.log("Ingrese valores numéricos");
    } while (isNaN(fechaSalida) === true)
    console.log("la fecha de check-out: " + Number(fechaSalida))

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
        opciones = prompt("Elegí el hospedaje que deseas: \n1-Hotel. \n2-Cabaña. \n3-Camping. \nPresiona X para finalizar." );
    }   
    alert('Reserva realizada con éxito') 
}
datosReserva();