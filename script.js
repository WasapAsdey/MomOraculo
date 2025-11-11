// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "../assets/CapitanCP.jpg",
  "../assets/el ingeniero.jpg",
  "../assets/elperrincolorado.jpg",
  "../assets/GatoVoid.jpg",
  "../assets/minionñero.jpg",
  "../assets/perrobufon.jpg",
  "../assets/ShadowEstiloso.jpg",
  "../assets/Chamba.jpg",
  "../assets/ElÑoquer.jpg",
  "../assets/GatoTriste.jpg",
  "../assets/JuanDepre.jpg",
  "../assets/Mi primo.jpg",
  "../assets/papa.jpg",
];

const titulos = [
  "Capitan CP",
  "El Ingeniero",
  "El Perrin Colorado",
  "El Gato Void",
  "Minion Ñero",
  "Perro Payasito",
  "ShadowEstiloso",
  "Ponte a Chambear VAGO",
  "El Ñoquer",
  "Gato triste (Miau Miauu Mia Miauuuu)",
  "Juan Depre",
  "Mi Primo",
  "papa",

];

const frases = [
  "Un Viejo Degenerado SuperHeroe con poderes especiales de disparar CP desde sus dedos ¡Impresionante!",
  "Simplemente Eres El Ingerniero ¿Que mas Quieres?",
  "La Version Tierna Y Mejor Del Chapulin !Tu No Abandonaste A Tu Familia¡",
  "Un Gato Bien Ojon y Bien Despierto (Y Edgy)",
  "Un Minion Con Severo Visaje, Nacido y Crecido En Las Calles de San Jorge Te Estilea Con Su Estilo Estiloso",
  "Un perrito payasito que es gracioso y siempre hace reir a todos",
  "Nuestro Erixo Edgy Ha Regresado Con Su Mero Estilo Y2k Para Farmear Aura",
  "Ey, ya mucha bobada con que  momo eres, ponte a chambiar mas bien",
  "Ñel Ñoquer Ñe Ño Ñonuncia Ñien Ñas Eñes",
  "mia mia miaa miauuuuuu mia mia miaa mia miauuuuuuu",
  "Un Caballo muy Fuckin Triste(Todo estara bien pana)",
  "Simplemente me acorde de mi primo, mira te pareces xDXDXDX",
  "Un Pdre de Familia Con La Foto De Perfil Mas Masculina Del Mundo (Mi Idolo)",

];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();