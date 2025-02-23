// Datos de los servicios con precios
const services = {
  "Unlock Tool": {
    description: "Desbloqueo de dispositivos",
    fields: [
      {
        type: "select",
        label: "Licencia",
        options: [
          { text: "3 Meses", price: { USDT: 20, MXN: 450, GTQ: 190 } },
          { text: "6 Meses", price: { USDT: 28, MXN: 650, GTQ: 250 } },
          { text: "12 Meses", price: { USDT: 45, MXN: 1000, GTQ: 400 } },
        ],
      },
      { type: "select", label: "Moneda", options: ["USDT", "MXN", "GTQ"] },
    ],
  },
  "Android Multi Tool": {
    description: "Créditos para Android Multi Tool",
    fields: [
      { type: "email", label: "Correo registrado", placeholder: "ejemplo@correo.com" },
      { type: "number", label: "Cantidad de créditos", placeholder: "Ej: 10", min: 1 },
      { type: "select", label: "Moneda", options: ["USDT", "MXN", "GTQ"] },
    ],
    pricePerCredit: { USDT: 1.5, MXN: 30, GTQ: 15 },
  },
  "FRP Samsung By IMEI": {
    description: "Desbloqueo FRP Samsung por IMEI",
    fields: [
      { type: "text", label: "IMEI o SN del dispositivo", placeholder: "Ej: 123456789012345" },
      { type: "select", label: "Moneda", options: ["USDT", "MXN", "GTQ"] },
    ],
    price: { USDT: 10, MXN: 200, GTQ: 90 },
  },
};

// Seleccionar elementos
const serviceSelect = document.getElementById("service");
const serviceDetails = document.getElementById("service-details");
const orderForm = document.getElementById("order-form");
const totalDisplay = document.getElementById("total");

// Mostrar detalles del servicio seleccionado
serviceSelect.addEventListener("change", () => {
  const selectedService = serviceSelect.value;
  const service = services[selectedService];

  // Limpiar detalles anteriores
  serviceDetails.innerHTML = "";

  // Mostrar descripción del servicio
  const description = document.createElement("p");
  description.textContent = service.description;
  serviceDetails.appendChild(description);

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
      const selectedLicense = service.fields[0].options.find(
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
  } else if (selectedService === "FRP Samsung By IMEI") {
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