//FORMULARIO//

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const inputs2 = document.querySelectorAll("#formulario textarea");
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/,
  mensaje: /^[a-zA-ZÀ-ÿ-Z0-9_.+-\s]{16,140}$/,
};

const campos = {
  nombre: false,
  mail: false,
  telefono: false,
  mensaje: false,
};

function validarFormulario(e) {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;

    case "mail":
      validarCampo(expresiones.email, e.target, "mail");
      break;

    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");
      break;

    case "mensaje":
      validarCampo(expresiones.mensaje, e.target, "mensaje");
      break;
  }
}

const validarCampo = (expresion, input, campo) => {
  console.log(input.value);
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo-${campo}`)
      .classList.remove("formulario-input-incorrecto");
    document
      .getElementById(`grupo-${campo}`)
      .classList.add("formulario-input-correcto");
    document
      .querySelector(`#grupo-${campo} i`)
      .classList.remove("fa-rectangle-xmark");
    document
      .querySelector(`#grupo-${campo} i`)
      .classList.add("fa-square-check");
    document.querySelector(`#grupo-${campo} i`).style.visibility = "visible";
    document
      .querySelector(`#grupo-${campo} .formulario-input-error`)
      .classList.remove("formulario-input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo-${campo}`)
      .classList.add("formulario-input-incorrecto");
    document
      .getElementById(`grupo-${campo}`)
      .classList.remove("formulario-input-correcto");
    document
      .querySelector(`#grupo-${campo} i`)
      .classList.add("fa-rectangle-xmark");
    document
      .querySelector(`#grupo-${campo} i`)
      .classList.remove("fa-square-check");
    document.querySelector(`#grupo-${campo} i`).style.visibility = "visible";
    document
      .querySelector(`#grupo-${campo} .formulario-input-error`)
      .classList.add("formulario-input-error-activo");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

inputs2.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos.nombre && campos.mail && campos.telefono && campos.mensaje) {
    formulario.reset();
    document
      .getElementById("formulario-mensaje-exito")
      .classList.add("formulario-mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario-mensaje-exito")
        .classList.remove("formulario-mensaje-exito-activo");
    }, 5000);

    document.querySelectorAll(".formulario-validacion-estado").forEach((icono) => {
      icono.classList.remove("formulario-validacion-estado");
    });
    document.querySelectorAll('.formulario-validacion-estado-mensaje').forEach((icono) => {
        icono.classList.remove('formulario-validacion-estado-mensaje');
    });
  } else{
    document.getElementById('formulario-mensaje-error').classList.add('formulario-mensaje-error-activo');
  }
});
