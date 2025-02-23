// Mostrar la sección de servicios al hacer clic en "Servicios" en el menú
document.querySelector('a[href="#servicios"]').addEventListener('click', (e) => {
  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
  document.getElementById('servicios').style.display = 'block'; // Muestra la sección de servicios
  document.getElementById('inicio').style.display = 'none'; // Oculta la sección de inicio
  document.getElementById('contacto').style.display = 'none'; // Oculta la sección de contacto
});

// Mostrar la sección de inicio al hacer clic en "Inicio" en el menú
document.querySelector('a[href="#inicio"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('inicio').style.display = 'block';
  document.getElementById('servicios').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
});

// Mostrar la sección de contacto al hacer clic en "Contacto" en el menú
document.querySelector('a[href="#contacto"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('contacto').style.display = 'block';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('servicios').style.display = 'none';
});

// Resto del código de servicios (ya existente)
const services = {
  // ... (tu objeto de servicios existente)
};

// Seleccionar elementos
const serviceSelect = document.getElementById("service");
const serviceDetails = document.getElementById("service-details");
const processTime = document.getElementById("process-time");
const orderForm = document.getElementById("order-form");
const totalDisplay = document.getElementById("total");

// Mostrar detalles del servicio seleccionado
serviceSelect.addEventListener("change", () => {
  const selectedService = serviceSelect.value;
  const service = services[selectedService];

  // Limpiar detalles anteriores
  serviceDetails.innerHTML = "";
  processTime.innerHTML = "";

  // Mostrar descripción del servicio
  const description = document.createElement("p");
  description.innerHTML = service.description;
  serviceDetails.appendChild(description);

  // Mostrar indicaciones
  const instructions = document.createElement("div");
  instructions.innerHTML = service.instructions;
  instructions.style.color = "#856404";
  instructions.style.backgroundColor = "#fff3cd";
  instructions.style.padding = "10px";
  instructions.style.borderRadius = "5px";
  instructions.style.border = "1px solid #ffeeba";
  serviceDetails.appendChild(instructions);

  // Mostrar tiempo de proceso
  const time = document.createElement("div");
  time.className = "process-time";
  time.innerHTML = service.processTime;
  processTime.appendChild(time);

  // Mostrar campos del servicio
  service.fields.forEach(field => {
    const inputGroup = document.createElement("div");
    inputGroup.className = "input-group";

    const label = document.createElement("label");
    label.textContent = field.label;
    inputGroup.appendChild(label);

    let input;
    if (field.type === "select") {
      input = document.createElement("select");
      field.options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.text || option;
        optionElement.textContent = option.text || option;
        input.appendChild(optionElement);
      });
    } else {
      input = document.createElement("input");
      input.type = field.type;
      if (field.placeholder) input.placeholder = field.placeholder;
      if (field.min) input.min = field.min;
    }
    input.required = true;
    input.addEventListener("input", calculateTotal);
    input.addEventListener("change", calculateTotal);
    inputGroup.appendChild(input);
    serviceDetails.appendChild(inputGroup);
  });

  // Calcular el total inicial
  calculateTotal();
});

// Calcular el total a pagar
function calculateTotal() {
  const selectedService = serviceSelect.value;
  const service = services[selectedService];
  let total = 0;

  if (selectedService === "Unlock Tool") {
    const licenseSelect = serviceDetails.querySelector("select");
    const currencySelect = serviceDetails.querySelectorAll("select")[1];
    if (licenseSelect && currencySelect) {
      const selectedLicense = service.fields[2].options.find(
        opt => opt.text === licenseSelect.value
      );
      const currency = currencySelect.value;
      total = selectedLicense.price[currency];
    }
  } else if (selectedService === "Android Multi Tool") {
    const creditsInput = serviceDetails.querySelector("input[type='number']");
    const currencySelect = serviceDetails.querySelector("select");
    if (creditsInput && currencySelect) {
      const credits = parseInt(creditsInput.value) || 0;
      const currency = currencySelect.value;
      total = credits * service.pricePerCredit[currency];
    }
  } else if (selectedService === "FRP Samsung By IMEI" || selectedService === "FRP Sam2" || selectedService === "FRP XIAOMI") {
    const currencySelect = serviceDetails.querySelector("select");
    if (currencySelect) {
      const currency = currencySelect.value;
      total = service.price[currency];
    }
  }

  totalDisplay.textContent = total;
}

// Enviar orden por WhatsApp
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedService = serviceSelect.value;
  const inputs = serviceDetails.querySelectorAll("input, select");

  let message = `Hola, quiero ordenar el servicio de ${selectedService}.\n\n`;
  inputs.forEach(input => {
    const label = input.previousElementSibling.textContent;
    const value = input.value;
    message += `- ${label}: ${value}\n`;
  });

  // Agregar el total a pagar
  message += `- Total a pagar: ${totalDisplay.textContent}\n`;

  // Codificar el mensaje para WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/16612296248?text=${encodedMessage}`;

  // Abrir enlace en una nueva pestaña
  window.open(whatsappLink, "_blank");
});