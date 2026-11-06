document.addEventListener('DOMContentLoaded', () => {

  // -------------------------------------------------------------
  // 1. Contador Dinámico: 50 Años de Memoria
  // -------------------------------------------------------------
  const anioActual = new Date().getFullYear();
  const anioGolpe = 1976;
  const aniosTranscurridos = anioActual - anioGolpe;

  const elementoContador = document.getElementById('contador-memoria');
  const elementoAnioActual = document.getElementById('current-year');

  if (elementoAnioActual) {
    elementoAnioActual.textContent = anioActual;
  }

  if (elementoContador) {
    elementoContador.innerHTML = `Han pasado <strong>${aniosTranscurridos} años</strong> desde el golpe cívico-militar de 1976. Continuamos construyendo Memoria, Verdad y Justicia.`;
  }

  // -------------------------------------------------------------
  // 2. Buscador de Testimonios en Tiempo Real
  // -------------------------------------------------------------
  const inputBuscador = document.getElementById('buscador');
  const tarjetasTestimonios = document.querySelectorAll('.testimonio-card');
  const elementoSinResultados = document.getElementById('sin-resultados');

  if (inputBuscador) {
    inputBuscador.addEventListener('input', (e) => {
      const termino = e.target.value.toLowerCase().trim();
      let visibles = 0;

      tarjetasTestimonios.forEach((card) => {
        const contenidoTexto = card.getAttribute('data-texto') || card.innerText.toLowerCase();
        
        if (contenidoTexto.includes(termino)) {
          card.classList.remove('d-none');
          visibles++;
        } else {
          card.classList.add('d-none');
        }
      });

      if (visibles === 0) {
        elementoSinResultados.classList.remove('d-none');
      } else {
        elementoSinResultados.classList.add('d-none');
      }
    });
  }

  // -------------------------------------------------------------
  // 3. Generador Dinámico de Tarjeta Conmemorativa (innerHTML)
  // -------------------------------------------------------------
  const formTarjeta = document.getElementById('form-tarjeta');
  const contenedorVistaPrevia = document.getElementById('vista-previa-tarjeta');

  if (formTarjeta) {
    formTarjeta.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre-tarjeta').value.trim();
      const mensaje = document.getElementById('mensaje-tarjeta').value.trim();

      if (nombre && mensaje) {
        contenedorVistaPrevia.innerHTML = `
          <div class="card-conmemorativa text-center w-100">
            <span class="badge bg-primary mb-2">50 AÑOS - UNAHUR</span>
            <blockquote class="blockquote mb-3">
              <p class="fs-5 italic">"${mensaje}"</p>
            </blockquote>
            <h5 class="fw-bold mb-1">${nombre}</h5>
            <small class="text-light-50">Memoria, Verdad y Justicia (1976 - ${anioActual})</small>
          </div>
        `;
      }
    });
  }

  // -------------------------------------------------------------
  // 4. Validación de Formulario de Adhesión
  // -------------------------------------------------------------
  const formAdhesion = document.getElementById('form-adhesion');
  const alertaFormulario = document.getElementById('alerta-formulario');

  if (formAdhesion) {
    formAdhesion.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const esValido = formAdhesion.checkValidity();

      if (!esValido) {
        formAdhesion.classList.add('was-validated');
        alertaFormulario.className = 'alert alert-danger mt-3';
        alertaFormulario.textContent = 'Por favor, completa todos los campos requeridos correctamente.';
        alertaFormulario.classList.remove('d-none');
      } else {
        formAdhesion.classList.remove('was-validated');
        alertaFormulario.className = 'alert alert-success mt-3';
        alertaFormulario.textContent = '¡Gracias por adherir a la campaña de Memoria, Verdad y Justicia!';
        alertaFormulario.classList.remove('d-none');
        
        // Limpiar inputs
        formAdhesion.reset();
      }
    });
  }

});
