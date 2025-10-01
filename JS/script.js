const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
// Seleccionamos todos los enlaces (anchor tags) dentro de la navegación principal (#mainNav)
const navLinks = mainNav.querySelectorAll("a");

// 2. Función para alternar (abrir/cerrar) la clase 'open'
function toggleMenu() {
  mainNav.classList.toggle("open");
}

// 3. Función para cerrar el menú
function closeMenu() {
  // Si la clase 'open' está presente, la removemos.
  if (mainNav.classList.contains("open")) {
    mainNav.classList.remove("open");
  }
}

// 4. Event Listener para el botón Toggle (hamburguesa)
menuToggle.addEventListener("click", toggleMenu);

// 5. Event Listeners para cada enlace del menú
// Iteramos sobre todos los enlaces que seleccionamos
navLinks.forEach((link) => {
  // Cuando se hace clic en un enlace:
  link.addEventListener("click", closeMenu);
});

const slides = document.querySelectorAll(".slideshow img");
let current = 0;

function showSlide() {
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === current);
  });
  current = (current + 1) % slides.length;
}

setInterval(showSlide, 6000); // cambia cada 6 segundos

// Validación simple del formulario de contacto

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const service = document.getElementById("service").value;

  if (!name || !email || !message) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }
  if (!email.includes("@")) {
    alert("Por favor ingresa un correo válido.");
    return;
  }

  alert(
    `Formulario enviado correctamente ✅. En breve responderemos tu consulta sobre: ${service}✨. ¡Gracias por contactarnos, ${name}!`
  ); /*template literal*/
  this.reset();
});
