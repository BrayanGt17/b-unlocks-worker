// Datos de los servicios con precios, indicaciones y tiempo de proceso
const services = {
  "Unlock Tool": {
    description: "Desbloqueo de dispositivos",
    instructions: "⚠️ Es necesario registrarse primero en la página oficial de <a href='https://unlocktool.net' target='_blank'>unlocktool.net</a>.",
    processTime: "⏰1-6 Horas",
    fields: [
      { type: "email", label: "Correo registrado", placeholder: "ejemplo@correo.com" },
      { type: "text", label: "Usuario registrado", placeholder: "Tu usuario en Unlock Tool" },
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
    instructions: `
      <p><strong>NOTA: LOS CRÉDITOS NO SON REEMBOLSABLES.</strong></p>
      <ol>
        <li>Regístrate en <a href="https://androidmultitool.com" target="_blank">Androidmultitool.com</a> antes de ordenar.</li>
        <li>El pedido se realiza con el correo electrónico registrado en el sitio web.</li>
        <li>Activa tu licencia con los créditos adquiridos.</li>
        <li>Opciones de licencia:
          <ul>
            <li>10 Créditos / 3 Meses</li>
            <li>18 Créditos / 6 Meses</li>
            <li>30 Créditos / 12 Meses</li>
          </ul>
        </li>
      </ol>
      <h3>Modelos Compatibles:</h3>
      <p>
        <a href="https://androidmultitool.com/supported_models/" target="_blank">Ver modelos compatibles</a>
      </p>
    `,
    processTime: "⏰1-5 Minutos.",
    fields: [
      { type: "email", label: "Correo registrado", placeholder: "ejemplo@correo.com" },
      { type: "number", label: "Cantidad de créditos", placeholder: "Ej: 10", min: 1 },
      { type: "select", label: "Moneda", options: ["USDT", "MXN", "GTQ"] },
    ],
    pricePerCredit: { USDT: 1.5, MXN: 30, GTQ: 15 },
  },
  "FRP Samsung By IMEI": {
    description: "Desbloqueo FRP Samsung por IMEI",
    instructions: `
      <p><strong>RECUERDE QUE NO ES NECESARIO CONECTARLO A LA PC.</strong></p>
      <ol>
        <li>Antes de ordenar, realiza un <strong>Hard Reset</strong> y desconecta el dispositivo de Wi-Fi.</li>
        <li>Proporciona el IMEI o SN del dispositivo.</li>
        <li>Verifica bien el IMEI/SN Antes de ordenar.</li>
      </ol>
      <h3>Modelos No Compatibles:</h3>
      <ul>
        <li>❌ SM-A107F/DS</li>
        <li>❌ SM-A025M/DS</li>
        <li>❌ SM-A042M/DS</li>
        <li>❌ SM-A045M/DS</li>
        <li>❌ SM-S146VL/DS</li>
        <li>❌ SM-A226BR/N</li>
        <li>❌ SM-A025U/DS</li>
        <li>❌ SM-A037M/A037F/DS</li>
        <li>❌ SM-S135DL</li>
        <li>❌ SM-A015M</li>
        <li>❌ SM-A207M/DS</li>
        <li>❌ SM-A145M/DS y todas las series A145</li>
        <li>❌ SM-A146M/DS</li>
        <li>❌ SM-A057M/G/D/S</li>
        <li>❌ SM-A055M</li>
        <li>❌ SM-A055F</li>
      </ul>
      <p><strong>NO SOPORTA EQUIPOS CON REPORTE DE ROBO, KNOX, PAYJOY, KG.</strong></p>
    `,
    processTime: "⏰1-5 minutos .",
    fields: [
      { type: "text", label: "IMEI o SN del dispositivo", placeholder: "Ej: 123456789012345" },
      { type: "select", label: "Moneda", options: ["USDT", "MXN", "GTQ"] },
    ],
    price: { USDT: 10, MXN: 200, GTQ: 90 },
  },
  "FRP Sam2": {
    description: "Desbloqueo FRP Samsung por IMEI",
    instructions: `
      <p><strong>RECUERDE QUE NO ES NECESARIO CONECTARLO A LA PC.</strong></p>
      <p><strong>SI SOPORTA EQUIPOS CON REPORTE DE ROBO, KNOX, PAYJOY, KG.</strong></p>
      <ol>
        <li>Antes de ordenar, realiza un <strong>Hard Reset</strong> y desconecta el dispositivo de Wi-Fi.</li>
        <li>Proporciona el IMEI o SN del dispositivo.</li>
        <li>Verifica bien el IMEI/SN Antes de ordenar.</li>
      </ol>
      <h3>Modelos No Compatibles:</h3>
      <ul>
        <li>❌ SM-A107F/DS</li>
        <li>❌ SM-A025M/DS</li>
        <li>❌ SM-A042M/DS</li>
        <li>❌ SM-A045M/DS</li>
        <li>❌ SM-S146VL/DS</li>
        <li>❌ SM-A226BR/N</li>
        <li>❌ SM-A025U/DS</li>
        <li>❌ SM-A037M/A037F/DS</li>
        <li>❌ SM-S135DL</li>
        <li>❌ SM-A015M</li>
        <li>❌ SM-A207M/DS</li>
        <li>❌ SM-A145M/DS y todas las series A145</li>
        <li>❌ SM-A146M/DS</li>
        <li>❌ SM-A057M/G/D/S</li>
        <li>❌ SM-A055M</li>
        <li>❌ SM-A055F</li>
      </ul>
    `,
    processTime: "⏰1-5 minutos .",
    fields: [
      { type: "text", label: "IMEI o SN del dispositivo", placeholder: "Ej: 123456789012345" },
      { type: "select", label: "Moneda", options: ["USDT", "MXN", "GTQ"] },
    ],
    price: { USDT: 15, MXN: 250, GTQ: 100 },
  },
  "FRP XIAOMI": {
    description: "XIAOMI FRP/RESET",
    instructions: "⚠️ Proporciona el IMEI del dispositivo y la red actual.",
    processTime: "⏰1-5 minutos.",
    fields: [
      { type: "text", label: "IMEI del dispositivo", placeholder: "Ej: 123456789012345" },
      { type: "select", label: "Moneda", options: ["USDT", "MXN", "GTQ"] },
    ],
    price: { USDT: 15, MXN: 300, GTQ: 120 },
  },
};

// Seleccionar elementos
const serviceSelect = document.getElementById("service");
const serviceDetails = document.getElementById("service-details");
const processTime = document.getElementById("process-time");
const orderForm = document.getElementById("order-form");
const totalDisplay = document.getElementById("total");
const totalContainer = totalDisplay.parentElement.parentElement; // Contenedor del total a pagar
const submitButton = orderForm.querySelector("button[type='submit']");

// Ocultar elementos inicialmente
totalContainer.classList.add("hidden");
processTime.classList.add("hidden");
submitButton.classList.add("hidden");

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

// Mostrar detalles del servicio seleccionado
serviceSelect.addEventListener("change", () => {
  const selectedService = serviceSelect.value;
  const service = services[selectedService];

  // Limpiar detalles anteriores
  serviceDetails.innerHTML = "";
  processTime.innerHTML = "";

  if (!service) return; // Si no hay servicio seleccionado, salir

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

  // Mostrar elementos ocultos
  totalContainer.classList.remove("hidden");
  processTime.classList.remove("hidden");
  submitButton.classList.remove("hidden");

  // Calcular el total inicial
  calculateTotal();
});

// Calcular el total a pagar
function calculateTotal() {
  const selectedService = serviceSelect.value;
  const service = services[selectedService];
  let total = 0;

  if (!service) {
    totalDisplay.textContent = total;
    return;
  }

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