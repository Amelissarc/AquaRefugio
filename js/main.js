// Angie Melissa Rincón Cely - 3da Pre-entrega

// Definiendo elementos de formulario y entradas
const form = document.querySelector('#booking-form form');
const nameInput = document.querySelector('#specificSizeInputName');
const guestsSelect = document.querySelector('#specificSizeSelect');
const roomType = document.querySelector('#room-type');
const bookingOption = document.querySelector('input[name="bookingOption"]');
const checkIn = document.querySelector('input[name="checkIn"]');
const checkOut = document.querySelector('input[name="checkOut"]');

// Función para guardar datos en el almacenamiento local
function saveData() {
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("guests", guestsSelect.value);
  localStorage.setItem("checkIn", checkIn.value);
  localStorage.setItem("checkOut", checkOut.value);
}

// Función para validar datos de formulario
function validateForm() {
  if (!checkIn.value || isNaN(Date.parse(checkIn.value))) {
    console.error("Seleccione una fecha de check-in válida");
    return false;
  }
  if (!checkOut.value || isNaN(Date.parse(checkOut.value))) {
    console.error("Por favor, seleccione una fecha de salida válida");
    return false;
  }
  return true;
}

// Detector de eventos de envío de formularios
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar formulario
  if (!validateForm()) {
    return false;
  }

  // Guardar datos en el almacenamiento local
  saveData();

  // Mostrar mensaje de éxito
  Swal.fire(
    'Reservado',
    'Por favor, revise su correo electrónico para confirmar sus datos',
    'success'
  );

  // Restablecer formulario
  form.reset();
});

// Cargar datos desde el almacenamiento local
const name = localStorage.getItem("name");
const guests = localStorage.getItem("guests");
const checkInValue = localStorage.getItem("checkIn");
const checkOutValue = localStorage.getItem("checkOut");

console.log("Datos almacenados en almacenamiento local:");
console.log(`Nombre: ${name}`);
console.log(`Huespedes: ${guests}`);
console.log(`Check-in: ${checkInValue}`);
console.log(`Check-out: ${checkOutValue}`);

class BookingOption {
  constructor(option) {
    this.name = option.name;
    this.price = option.price;
    this.description = option.description;
    this.services = option.services;
  }
  
  showInfo() {
    console.log(`Option: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Description: ${this.description}`);
    console.log(`Services: ${this.services.join(', ')}`);
  }
}

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

// Para Cargar opciones de reserva desde un archivo JSON
fetch('../js/Booking-options.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al obtener opciones. Código de estado HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const options = data.options;
    options.forEach(option => {
      const bookingOption = new BookingOption(option);
      bookingOption.showInfo();
    });
  })
  .catch(error => {
    console.error(error);
  });
