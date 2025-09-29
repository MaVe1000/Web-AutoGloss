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

  if (!name || !email || !message) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }
  if (!email.includes("@")) {
    alert("Por favor ingresa un correo válido.");
    return;
  }

  alert("Formulario enviado correctamente ✅");
  this.reset();
});
