// Datos de los servicios
const services = {
  "Unlock Tool": {
    description: "Desbloqueo de dispositivos",
    fields: [
      { type: "select", label: "Licencia", options: ["3 Meses", "6 Meses", "12 Meses"] },
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
  },
  "FRP Samsung By IMEI": {
    description: "Desbloqueo FRP Samsung por IMEI",
    fields: [
      { type: "text", label: "IMEI o SN del dispositivo", placeholder: "Ej: 123456789012345" },
      { type: "select", label: "Moneda", options: ["USDT", "MXN", "GTQ"] },
    ],
  },
};

// Seleccionar elementos
const serviceSelect = document.getElementById("service");
const serviceDetails = document.getElementById("service-details");
const orderForm = document.getElementById("order-form");

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
        optionElement.value = option;
        optionElement.textContent = option;
        input.appendChild(optionElement);
      });
    } else {
      input = document.createElement("input");
      input.type = field.type;
      if (field.placeholder) input.placeholder = field.placeholder;
      if (field.min) input.min = field.min;
    }
    input.required = true;
    inputGroup.appendChild(input);
    serviceDetails.appendChild(inputGroup);
  });
});

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

  // Codificar el mensaje para WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/16612296248?text=${encodedMessage}`;

  // Abrir enlace en una nueva pestaña
  window.open(whatsappLink, "_blank");
});