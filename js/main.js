
const tomarReserva = () => {
    let nombre = prompt("Escribe el nombre de quien realizará la reserva")
    let cantidad = prompt ("¿Cuantos huéspedes van a ser?")
    console.log(`La reserva se guardo con el nombre de ${nombre}; se van a alojar ${cantidad} personas`)
}
tomarReserva();

class hospedaje {
    constructor(tipo,precio) {
        this.tipo = tipo;
        this.precio = precio;
        this.info = `El hospedaje seleccionado es en ${this.tipo}, el valor por noche es de $${this.precio}USD`;
    }
    verInfo(){
        console.log(this.info)
    }
}

alert("Selecciona el tipo de hospedaje que deseas");
let opciones = prompt("1: cabaña, 2: hotel, 3: camping");

if (opciones == 1) {
    const cabaña = new hospedaje("cabaña", 250);
    cabaña.verInfo();
}

else if (opciones == 2) {
    const hotel = new hospedaje("hotel", 350);
    hotel.verInfo();
} 

else if (opciones == 3) {
    const camping = new hospedaje("camping", 120);
    camping.verInfo();
}
else {
    alert("Por favor seleccione una opción valida")
}


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

alert('Reserva realizada con éxito') 





const obtenerInformacion = (reserva) => {
    datos= {
        nombre: ["Melissa", "Juan", "Carolina", "Jaime"],
        huespedes: [1,2,3,4],
        tipoHospedaje: ["hotel", "cabaña", "camping"],
        precio: [250,350,120],
        fechaIngreso: [10,15,20,25],
        fechaSalida: [15,17,28,30]
    }
}

