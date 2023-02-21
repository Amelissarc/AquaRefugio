// Angie Melissa Rincón Cely - 3da Pre-entrega

// Definir elementos del formulario y entradas
const form = document.querySelector('#booking-form form');
const nameInput = document.querySelector('#specificSizeInputName');
const guestsSelect = document.querySelector('#specificSizeSelect');
const roomTypeSelect = document.querySelector('#room-type');
const checkInInput = document.querySelector('input[name="checkIn"]');
const checkOutInput = document.querySelector('input[name="checkOut"]');

// Función para validar los datos del formulario
function validateForm() {
  // Comprobar que el nombre no esté vacío
  if (nameInput.value.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor ingrese su nombre!',
      footer: '<a href="">Why do I have this issue?</a>'
    });
    return false;
  }

  // Comprobar que se haya seleccionado el tipo de habitación
  if (roomTypeSelect.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, seleccione el tipo de habitación.',
      footer: '<a href="">Why do I have this issue?</a>'
    });
    return false;
  }

  // Comprobar que se haya seleccionado un número válido de huéspedes
  const numGuests = parseInt(guestsSelect.value);
  if (isNaN(numGuests) || numGuests < 1) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, seleccione un número válido de huéspedes..',
      footer: '<a href="">Why do I have this issue?</a>'
    });
    return false;
  }

  // Comprobar que se hayan ingresado fechas de check-in y check-out válidas
  const checkInDate = new Date(checkInInput.value);
  const checkOutDate = new Date(checkOutInput.value);
  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, seleccione fechas de check-in y check-out válidas.',
      footer: '<a href="">Why do I have this issue?</a>'
    });
    return false;
  }

  // Comprobar que la fecha de check-in sea anterior a la fecha de check-out
  if (checkInDate >= checkOutDate) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La fecha de check-in debe ser anterior a la fecha de check-out.',
      footer: '<a href="">Why do I have this issue?</a>'
    });
    return false;
  }

  return true;
}

// Función para guardar los datos de reserva en el almacenamiento local
function saveBooking() {
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('guests', guestsSelect.value);
  localStorage.setItem('checkIn', checkInInput.value);
  localStorage.setItem('checkOut', checkOutInput.value);
  localStorage.setItem('roomType', roomTypeSelect.value);
}

// Función para mostrar un mensaje de éxito
function showSuccessMessage() {
  Swal.fire(
    'Reservado',
    'Por favor, revise su correo electrónico para confirmar sus datos',
    'success'
  );
}

// Manejar el envío del formulario
form.addEventListener('submit', (event) => {
  // Prevenir el comportamiento predeterminado del formulario
  event.preventDefault();

  // Validar el formulario
  if (!validateForm()) {
    return false;
  }

  // Guardar los datos de reserva en el almacenamiento local
  saveBooking();

  // Mostrar el mensaje de éxito
  showSuccessMessage();

  // Restablecer el formulario
  form.reset();
});

// Función para crear una instancia de BookingOption a partir de un objeto de opción
function createBookingOption(option) {
  return new BookingOption(option.name, option.price, option.description, option.services);
}

// Cargar opciones de reserva desde el archivo JSON
fetch('../js/booking_options.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al obtener opciones. Código de estado HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Almacenar los datos en una variable y en el localStorage
    const bookingOptions = data.options.map(createBookingOption);
    localStorage.setItem('bookingOptions', JSON.stringify(bookingOptions));
  })
  .catch(error => {
    console.error(error);
  });

// Obtener las opciones de reserva del localStorage
const bookingOptions = JSON.parse(localStorage.getItem('bookingOptions')) || [];

// Mostrar opciones de reserva en la lista desplegable de opciones de reserva
document.addEventListener('DOMContentLoaded', function () {
  const roomTypeSelect = document.querySelector('#room-type');
  if (roomTypeSelect) {
    // Rellenar las opciones de la lista desplegable con las opciones de reserva
    bookingOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.name;
      optionElement.textContent = option.name;
      roomTypeSelect.appendChild(optionElement);
    });

    roomTypeSelect.addEventListener('change', (e) => {
      const selectedIndex = e.target.selectedIndex;
      const selectedOption = bookingOptions[selectedIndex];
    });
  }
});

// Clase para representar una opción de reserva
class BookingOption {
  constructor(name, price, description, services = []) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.services = services;
  }

  showInfo() {
    console.log(`
      name: ${this.name}
      Price: ${this.price}
      Description: ${this.description}
      Services: ${this.services}
    `);
  }
}

// Obtener los datos del archivo room_availability.json
fetch('../js/room_availability.json')
  .then(response => response.json())
  .then(data => {
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
  })
  .catch(error => console.error(error));


// API absctapi calendario
function httpGetAsync(url, callback) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", url, true); // true para asincrónico
  xmlHttp.send(null);
}

let url = "https://holidays.abstractapi.com/v1/?api_key=4f17bac92a1e432684664d7764046f43&country=AR&year=2023&month=02&day=21"

httpGetAsync(url, function(response) {
  console.log(response);
});

