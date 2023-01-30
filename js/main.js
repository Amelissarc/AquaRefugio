// Angie Melissa Rincón Cely - 2da Pre-entreg
const tomarReserva = () => {
    let nombre = prompt("Escribe el nombre de quien realizará la reserva");
    let cantidad = prompt("¿Cuantos huéspedes van a ser?");
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("cantidad", cantidad);
    console.log(`La reserva se guardo con el nombre de ${nombre}; se van a alojar ${cantidad} personas.`);
};
tomarReserva();

class hospedaje {
    constructor(tipo, precio) {
        this.tipo = tipo;
        this.precio = precio;
        this.info = `El hospedaje seleccionado es en ${this.tipo}, el valor por noche es de $${this.precio}USD`;
    }
    verInfo() {
        console.log(this.info);
    }
}

alert("Selecciona el tipo de hospedaje que deseas");
let opciones = prompt("1: cabaña, 2: hotel, 3: camping");

if (opciones == 1) {
    const cabaña = new hospedaje("cabaña", 250);
    localStorage.setItem("hospedaje", "cabaña");
    localStorage.setItem("precio", 250);
    cabaña.verInfo();
} else if (opciones == 2) {
    const hotel = new hospedaje("hotel", 350);
    localStorage.setItem("hospedaje", "hotel");
    localStorage.setItem("precio", 350);
    hotel.verInfo();
} else if (opciones == 3) {
    const camping = new hospedaje("camping", 120);
    localStorage.setItem("hospedaje", "camping");
    localStorage.setItem("precio", 120);
    camping.verInfo();
} else {
    alert("Por favor seleccione una opción valida");
}

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

localStorage.setItem('checkIn', fechaIngreso);
localStorage.setItem('checkOut', fechaSalida);

let checkIn = localStorage.getItem('checkIn');
let checkOut = localStorage.getItem('checkOut');

alert('Reserva realizada con éxito') 

//Habitaciones disponibles construyendo 
let rooms = {
    cabañas: 10,
    habitaciones: 5,
    Camping: 2
  };

// Retrieve the stored state of the `rooms` object from local storage (if it exists)
const storedRooms = JSON.parse(localStorage.getItem('rooms')) || rooms;

$("#booking-form").submit(function(event) {
  event.preventDefault(); 

  let roomType = $("#room-type").val();
  let checkIn = new Date($("#check-in").val());
  let checkOut = new Date($("#check-out").val());

  if (checkIn >= checkOut) {
    alert("La fecha de salida debe ser posterior a la fecha de entrada");
    return;
  }

  if (storedRooms[roomType] > 0) {

    storedRooms[roomType]--;

    $("#availability").html("Reserva exitosa, su tipo de habitación es en " + roomType + " Check-in: " + checkIn + " Check-out: " + checkOut);
  } else {

    $("#availability").html("Lo sentimos, el tipo de habitación seleccionada no esta disponible durante las fechas seleccionadas, probá con otra.");
  }

  // Store the updated state of the `rooms` object in local storage
  localStorage.setItem('rooms', JSON.stringify(storedRooms));

  let hotelRooms = [
    {number: 1, type: 'double', occupied: false},
    {number: 2, type: 'single', occupied: true},
    {number: 3, type: 'double', occupied: false},
    {number: 4, type: 'single', occupied: true},
    {number: 5, type: 'double', occupied: false}
  ];

  let habitacionesDoblesDesocupadas = hotelRooms.filter(room => room.type === 'double' && room.occupied === false);

  let room2 = hotelRooms.find(room => room.number === 2);

});
  
  