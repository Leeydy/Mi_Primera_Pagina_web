// alert("Hola este es mi Javascript");

//Varia
// Como Declara Variables y asiganarle un valor
let nombre = "Leeydy";
const Apellido ="Barrera";
var Segapellido ="Hernandez";
console.log(nombre);
console.log(Apellido);
console.log(Segapellido);
console.log (nombre+" "+Apellido+" "+Segapellido);

// Condicionales
// Primero declaro elementos

let nombre1 = "Molly";
let Cuidad1 = "Bogota";
let Gusto1 = "Cocos";
let Parrafo = document.querySelector(".parrafo2");
function cambiartexto(nombre1, Cuidad1, Gusto1){
    let contenido = `Me llamo Leeydy ${nombre1}, naci el la ciudad ${Cuidad1} y me gustan los ${Gusto1} que me regala mi mama Ley`;    
    return contenido;
}
Parrafo.innerText = cambiartexto(nombre1, Cuidad1,Gusto1);

const form = document.getElementById("form");
const nombres = document.getElementById("nombres");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombres.value.length < 4) {
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
    formulario.submit();
  } else {
    e.preventDefault();
  }
});