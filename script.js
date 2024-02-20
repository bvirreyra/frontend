// alert("hola mundo");
// console.log("hola mundo");
// let nombre = "boris";
// console.log(nombre);
// alert(nombre);
let titulo2 = document.querySelector("#sobremi");
function cambia() {
  switch (titulo2.textContent) {
    case "Acerca de mi":
      titulo2.textContent = "HOLA MUNDO";
      break;
    case "HOLA MUNDO":
      titulo2.textContent = "ADIOS MUNDO CRUEL";
      break;
    case "ADIOS MUNDO CRUEL":
      titulo2.textContent = "Acerca de mi";
      break;
  }
}
let btncambia = document.querySelector("#botoncambia");
btncambia.addEventListener("click", cambia);
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
function validarFormulario() {
  console.log("tamanio de texto", nombre.value.length);
  // console.log("correcto o incorrecto", valido);
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";
  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}
form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
