
const galeriaContentOne = document.getElementById("galeria-content");
const galeriaContentTwo = document.getElementById("galeria-content-two");
const galeriaContentThree = document.getElementById("galeria-content-tree");

function actualizarTarjetas(juegos, contenedor) {
  const tarjetas = contenedor.querySelectorAll(".card");

  tarjetas.forEach((tarjeta, index) => {
    if (juegos[index]) {
      const juego = juegos[index];

      const img = tarjeta.querySelector("img");
      img.src = juego.thumbnail || "https://via.placeholder.com/150";
      img.alt = juego.title;

      const titulo = tarjeta.querySelector(".card-title");
      titulo.textContent = juego.title;

      const descripcion = tarjeta.querySelector(".description");
      if (descripcion) {
        descripcion.textContent = juego.short_description || "Descripción no disponible.";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://www.mmobomb.com/api1/games?category=action")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error de conexión: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      actualizarTarjetas(data.slice(0, 4), galeriaContentOne);
    })
    .catch(error => {
      console.error("Error al obtener los juegos de acción y aventura", error);
    });

  fetch("https://www.mmobomb.com/api1/games?category=strategy")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error de conexión: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      actualizarTarjetas(data.slice(0, 4), galeriaContentTwo);
    })
    .catch(error => {
      console.error("Error al obtener los juegos de estrategia y simulación", error);
    });

  fetch("https://www.mmobomb.com/api1/games?category=MOBA")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error de conexión: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      actualizarTarjetas(data.slice(0, 4), galeriaContentThree);
    })
    .catch(error => {
      console.error("Error al obtener los juegos de RPG y fantasía", error);
    });
});