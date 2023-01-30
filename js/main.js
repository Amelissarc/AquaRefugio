// Angie Melissa Rincón Cely - 2da Pre-entreg

const tomarReserva = () => {
    let nombre = prompt("Escribe el nombre de quien realizará la reserva");
    let cantidad = prompt("¿Cuantos huéspedes van a ser?");
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("cantidad", cantidad);
    console.log(`La reserva se guardo con el nombre de ${nombre}; se van a alojar ${cantidad} personas.`);
};
tomarReserva();
class Hospedaje {
    constructor(tipo, precio, descripcion) {
        this.tipo = tipo;
        this.precio = precio;
        this.descripcion = descripcion;
        this.info = `El hospedaje seleccionado es en ${this.tipo}, el valor por noche es de $${this.precio}USD`;
    }
    verInfo() {
        console.log(`${this.info}\nDescripcion: ${this.descripcion}`);
    }
}

alert("Selecciona el tipo de hospedaje que deseas");
let opciones = prompt("1: cabaña, 2: hotel, 3: camping");

const opcionesArray = ['cabaña', 'hotel', 'camping'];
const preciosArray = [250, 350, 120];
const descripcionesArray = [
    'Cabañas con vistas al río y una amplia terraza para disfrutar', 
    'Hotel con piscina, spa y desayuno incluido',
    'Camping con parques y áreas de picnic para disfrutar del aire libre'
];
const serviciosArray = [
    ['Wifi', 'Desayuno'],
    ['Piscina', 'Spa', 'Restaurante'],
    ['Parques', 'Áreas de picnic']
];

if (opciones >= 1 && opciones <= 3) {
    const hospedaje = new Hospedaje(opcionesArray[opciones-1], preciosArray[opciones-1], descripcionesArray[opciones-1]);
    localStorage.setItem("hospedaje", opcionesArray[opciones-1]);
    localStorage.setItem("precio", preciosArray[opciones-1]);
    localStorage.setItem("descripcion", descripcionesArray[opciones-1]);
    localStorage.setItem("servicios", JSON.stringify(serviciosArray[opciones-1]));
    hospedaje.verInfo();
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
    console.log("Ingrese fecha en formato año/mes/día");

    if(isNaN(fechaSalida))
    console.log("Ingrese fecha en formato año/mes/día");

} while (isNaN(fechaSalida))
console.log("la fecha de check-out: " + fechaSalida)

localStorage.setItem('checkIn', fechaIngreso);
localStorage.setItem('checkOut', fechaSalida);

let rooms = [
  { type: "cabaña", datesAvailable: ["2022-05-01", "2022-05-02", "2022-05-03"] },
  { type: "habitacion", datesAvailable: ["2022-05-01", "2022-05-02"] },
  { type: "camping", datesAvailable: ["2022-05-03"] }
];

function checkAvailability(selectedType, checkIn, checkOut) {
  let selectedRoom = rooms.find(room => room.type === selectedType);
  if (!selectedRoom) {
    return "Tipo de habitación no disponible";
  }

  let availableDates = selectedRoom.datesAvailable;
  for (let date = checkIn; date < checkOut; date.setDate(date.getDate() + 1)) {
    let formattedDate = date.toISOString().slice(0, 10);
    if (!availableDates.includes(formattedDate)) {
      return "Habitación no disponible en fechas seleccionadas";
    }
  }

  return "Habitación disponible para reserva";
}

let selectedType = "cabaña";
let checkIn = new Date("2022-05-01");
let checkOut = new Date("2022-05-03");
let availability = checkAvailability(selectedType, checkIn, checkOut);
console.log(availability);

let hotelRooms = [
  {number: 1, type: 'cabaña', occupied: false},
  {number: 2, type: 'habitacion', occupied: true},
  {number: 3, type: 'camping', occupied: false},
  {number: 4, type: 'cabaña', occupied: true},
  {number: 5, type: 'habitacion', occupied: false}
];

let unoccupiedDoubleRooms = hotelRooms.filter(room => room.type === 'habitacion' && room.occupied === false);
  let room2 = hotelRooms.find(room => room.number === 2);