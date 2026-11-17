// Menú adaptable para celulares
const botonMenu = document.getElementById("menu-boton");
const navegacion = document.getElementById("navegacion");

if (botonMenu && navegacion) {
  botonMenu.addEventListener("click", () => {
    const abierto = navegacion.classList.toggle("abierta");
    botonMenu.setAttribute("aria-expanded", abierto);
  });
}

// Año automático en el pie de página
const anio = document.getElementById("anio");
if (anio) {
  anio.textContent = new Date().getFullYear();
}

// Validación sencilla del formulario de reservas
const formulario = document.getElementById("form-reserva");
if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const personas = Number(document.getElementById("personas").value);
    const mensaje = document.getElementById("mensaje");

    if (nombre === "" || personas < 1 || personas > 10) {
      mensaje.textContent = "Revisa los datos. La reserva admite de 1 a 10 personas.";
      return;
    }

    mensaje.textContent = "¡Gracias, " + nombre + "! Tu solicitud fue registrada como demostración.";
    formulario.reset();
  });
}
