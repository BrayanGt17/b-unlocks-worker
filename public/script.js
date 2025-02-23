// Seleccionar elementos
const amtTable = document.getElementById("amt-table");
const frpTable = document.getElementById("frp-table");
const amtModal = document.getElementById("amt-modal");
const frpModal = document.getElementById("frp-modal");
const closeBtns = document.querySelectorAll(".close");

// Mostrar modal de Android Multi Tool
amtTable.addEventListener("click", () => {
  amtModal.style.display = "flex";
});

// Mostrar modal de FRP Samsung By IMEI
frpTable.addEventListener("click", () => {
  frpModal.style.display = "flex";
});

// Cerrar modales
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    amtModal.style.display = "none";
    frpModal.style.display = "none";
  });
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === amtModal || event.target === frpModal) {
    amtModal.style.display = "none";
    frpModal.style.display = "none";
  }
});
// Calcular el total a pagar para AMT
const creditsInput = document.getElementById("credits");
const currencySelect = document.getElementById("currency");
const totalDisplay = document.getElementById("total");

const calculateTotalAMT = () => {
  const credits = parseInt(creditsInput.value) || 0;
  const pricePerCredit = parseFloat(currencySelect.value);
  const total = credits * pricePerCredit;
  totalDisplay.textContent = total.toFixed(2);
};

creditsInput.addEventListener("input", calculateTotalAMT);
currencySelect.addEventListener("change", calculateTotalAMT);

// Calcular el total a pagar para FRP
const frpCurrencySelect = document.getElementById("frp-currency");
const frpTotalDisplay = document.getElementById("frp-total");

const calculateTotalFRP = () => {
  const price = parseFloat(frpCurrencySelect.value);
  frpTotalDisplay.textContent = price.toFixed(2);
};

frpCurrencySelect.addEventListener("change", calculateTotalFRP);

// Enviar correo, créditos y moneda por WhatsApp (AMT)
const orderBtn = document.getElementById("order-btn");
const emailInput = document.getElementById("email");

orderBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const credits = creditsInput.value.trim();
  const currency = currencySelect.options[currencySelect.selectedIndex].text;

  if (email === "" || credits === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Mensaje predefinido
  const message = `Hola, quiero ordenar créditos para Android Multi Tool.\n\n- Correo registrado: ${email}\n- Créditos solicitados: ${credits}\n- Moneda de pago: ${currency}\n- Total a pagar: ${totalDisplay.textContent}`;
  const encodedMessage = encodeURIComponent(message);

  // Enlace de WhatsApp
  const whatsappLink = `https://wa.me/16612296248?text=${encodedMessage}`;

  // Abrir enlace en una nueva pestaña
  window.open(whatsappLink, "_blank");
});

// Enviar IMEI o SN, moneda y total por WhatsApp (FRP Samsung)
const orderFrpBtn = document.getElementById("order-frp-btn");
const imeiInput = document.getElementById("imei");

orderFrpBtn.addEventListener("click", () => {
  const imei = imeiInput.value.trim();
  const currency = frpCurrencySelect.options[frpCurrencySelect.selectedIndex].text;
  const total = frpTotalDisplay.textContent;

  if (imei === "") {
    alert("Por favor, ingresa el IMEI o SN del dispositivo.");
    return;
  }

  // Mensaje predefinido
  const message = `Hola, quiero ordenar el servicio de FRP Samsung By IMEI.\n\n- IMEI/SN: ${imei}\n- Moneda de pago: ${currency}\n- Total a pagar: ${total}`;
  const encodedMessage = encodeURIComponent(message);

  // Enlace de WhatsApp
  const whatsappLink = `https://wa.me/16612296248?text=${encodedMessage}`;

  // Abrir enlace en una nueva pestaña
  window.open(whatsappLink, "_blank");
});