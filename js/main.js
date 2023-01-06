function datosReserva(){
    let nombreIngresado = prompt("Ingresar nombre: ");
    console.log("El nombre ingresado es " + nombreIngresado);

    let apellidoIngresado = prompt("Ingresar apellido: ");
    console.log("El apellido ingresado es " + apellidoIngresado)
    
    let cantidadHuespedes = prompt("Seleccione cantidad de huéspedes: ");
    console.log("La reserva se realizara para " + cantidadHuespedes + " personas.")

    let fechaIngreso = prompt("Ingrese fecha de llegada:");
        console.log("La fecha de llegada es: " + fechaIngreso)
    
    let fechaSalida = prompt("Ingrese fecha de salida:");
    console.log("la fecha de salida es: " + fechaSalida)

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