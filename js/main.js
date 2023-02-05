// Angie Melissa Rincón Cely - 3da Pre-entrega

// Definiendo el elemento de formulario y las entradas 
const form = document.querySelector('#booking-form form');
const specificSizeInputName = document.querySelector('#specificSizeInputName');
const specificSizeSelect = document.querySelector('#specificSizeSelect');
const roomTypeSelect = document.querySelector('#room-type');
const bookingOption = document.querySelector(`input[name="bookingOption"]`);

// Detector de eventos de envío al formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
   
  // Valores de las entradas para guardar en el localStorage
  let name = specificSizeInputName.value;
  let amount = specificSizeSelect.value;
  localStorage.setItem("name", name);
  localStorage.setItem("amount", amount);
  console.log(`La reserva se guardó con el nombre de ${name}; ${amount} personas se quedarán.`);

  Swal.fire(
    'Reservado',
    'Revisa tu correo electronico para confirmar tus datos',
    'success'
  );
  let formulario = document.getElementById("bookingReset")
   formulario.reset() // esto  resetea el formulario.
});

function BookingOption(option, price, description) {
  this.option = option;
  this.price = price;
  this.description = description;
}

BookingOption.prototype.showInfo = function() {
  console.log(`Opción: ${this.option}`);
  console.log(`Precio noche: ${this.price}`);
  console.log(`Descripción: ${this.description}`);
};

const bookingOptionData = {
  optionArray: [ '', 'cabañas', 'habitaciones', 'camping'],
  priceArray: [,250, 350, 120],
  descriptionArray: [
  '',
  'Cabañas con vista al río y una amplia terraza para disfrutar',
  'Hotel con piscina, spa y desayuno incluido',
  'Camping con parques y merenderos para disfrutar del aire libre'
  ],
  servicesArray: [
    '',
  ['Wifi', 'Desayuno'],
  ['Piscina', 'Spa', 'Restaurante'],
  ['Parques', 'Áreas de picnic']
  ]
};

let bookingOptionArray = [];

document.addEventListener('DOMContentLoaded', function () {
  const roomTypeSelect = document.getElementById('room-type');
  
  if (roomTypeSelect) {
    roomTypeSelect.addEventListener('change', (e) => {
      const selectedIndex = roomTypeSelect.selectedIndex;
      const bookingOption = new BookingOption(
          bookingOptionData.optionArray[selectedIndex],
          bookingOptionData.priceArray[selectedIndex],
          bookingOptionData.descriptionArray[selectedIndex]
      );
      bookingOptionArray.push(bookingOption);
      localStorage.setItem("bookingOptionArray", JSON.stringify(bookingOptionArray));
      bookingOption.showInfo();
    });
  }
});
// Fechas de entrada y salida
const checkInInput = document.querySelector(`input[name="checkIn"]`);
const checkOutInput = document.querySelector(`input[name="checkOut"]`);

// Check-in 
if (!checkInInput) {
} else if (!checkInInput.value || isNaN(Date.parse(checkInInput.value))) {
  console.log(`Seleccione una fecha de entrada válida`);
} else {
  const checkInDate = checkInInput.value;
  console.log(`Fecha de ingreso: ${checkInDate}`);
  localStorage.setItem("checkIn", checkInDate);
}

// Check-out
if (!checkOutInput) {
} else if (!checkOutInput.value || isNaN(Date.parse(checkOutInput.value))) {
  console.log(`Seleccione una fecha de entrada válida`);
} else {
  const checkOutDate = checkOutInput.value;
  console.log(`Fecha de salida: ${checkOutDate}`);
  localStorage.setItem("checkOut", checkOutDate);
}

// Disponibilidad de cuarto
let rooms = [
  { type: "cabañas", datesAvailable: ["2022-05-01", "2022-05-02", "2022-05-03"] },
  { type: "habitaciones", datesAvailable: ["2022-05-01", "2022-05-02"] },
  { type: "camping", datesAvailable: ["2022-05-03"] }
];

function checkAvailability(selectedType, checkIn, checkOut) {
  let selectedRoom = rooms.find(room => room.type === selectedType);
  if (!selectedRoom) {
    return "Tipo de habitación no disponible";
  }

  let availableDates = selectedRoom.datesAvailable;
  for (let date = new Date(checkIn); date < new Date(checkOut); date.setDate(date.getDate() + 1)) {
    let formattedDate = date.toISOString().slice(0, 10);
    if (!availableDates.includes(formattedDate)) {
      return "Habitación no disponible en fechas seleccionadas";
    }
  }
  return "Habitación disponible para reservar";
}

let selectedType = "cabañas";
let checkIn = "2022-05-01";
let checkOut = "2022-05-03";
let availability = checkAvailability(selectedType, checkIn, checkOut);
console.log(availability);

// Habitaciones de hotel y estado de ocupación
let hotelRooms = [
  {number: 1, type: 'cabañas', occupied: false},
  {number: 2, type: 'habitaciones', occupied: true},
  {number: 3, type: 'camping', occupied: false},
  {number: 4, type: 'cabañas', occupied: true},
  {number: 5, type: 'habitaciones', occupied: false}
];


