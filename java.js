document.addEventListener("DOMContentLoaded", () => {
  // 1. Contador de años dinámico
  const añoInicio = 1976;
  const añoActual = new Date().getFullYear();
  const cantidadAnios = añoActual - añoInicio;

  const contador = document.getElementById("contador-anios");
  if (contador) {
    contador.textContent = `Transcurrieron ${cantidadAnios} años de Memoria, Verdad y Justicia.`;
  }

  // 2. Buscador en tiempo real de testimonios
  const buscador = document.getElementById("buscador");
  const testimonios = Array.from(document.querySelectorAll(".testimonio"));

  if (buscador) {
    buscador.addEventListener("input", () => {
      const texto = buscador.value.trim().toLowerCase();

      testimonios.forEach((testimonio) => {
        const contenido = testimonio.textContent.toLowerCase();
        testimonio.style.display = contenido.includes(texto) ? "" : "none";
      });
    });
  }

  // 3. Generador dinámico de tarjeta conmemorativa
  const botonGenerar = document.getElementById("btn-generar");
  const mensajeTarjeta = document.getElementById("mensaje-tarjeta");
  const tarjetaResultado = document.getElementById("tarjeta-resultado");

  if (botonGenerar && mensajeTarjeta && tarjetaResultado) {
    botonGenerar.addEventListener("click", () => {
      const mensaje = mensajeTarjeta.value.trim();

      if (!mensaje) {
        tarjetaResultado.innerHTML = `<p class="error">Por favor, escribí un mensaje reflexivo.</p>`;
        return;
      }

      // Estructura visual usando las clases de style.css
      tarjetaResultado.innerHTML = `
        <div class="tarjeta-memoria">
          <p class="tarjeta-fecha">Memoria Activa — ${añoActual}</p>
          <p class="tarjeta-mensaje">"${mensaje}"</p>
          <p class="tarjeta-firma">Nunca Más</p>
        </div>
      `;
      
      mensajeTarjeta.value = "";
    });
  }

  // 4. Validación del formulario de adhesión
  const form = document.getElementById("form-adhesion");
  const msgAdhesion = document.getElementById("msg-adhesion");

  if (form && msgAdhesion) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputNombre = document.getElementById("nombre-adhesion");
      const nombre = inputNombre ? inputNombre.value.trim() : "";

      if (!nombre) {
        msgAdhesion.textContent = "Por favor, ingresá tu nombre y apellido.";
        msgAdhesion.className = "error";
        return;
      }

      msgAdhesion.textContent = `¡Gracias, ${nombre}, por sumarte a la Memoria Activa!`;
      msgAdhesion.className = "exito";
      form.reset();
    });
  }
});