//API Key de GiantBomb
const API_KEY = "c8bd84b8a2c27078711076e273dfb0ad21457913";

const GIANTBOMB_API_URL = `https://www.giantbomb.com/api/games/?api_key=${API_KEY}&format=json`;

function actualizarTarjetas(juegos) {
    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach((tarjeta, index) => {
        if (juegos[index]) {const juego = juegos[index];

            const img = tarjeta.querySelector("img");
            img.src = juego.image?.medium_url || "https://via.placeholder.com/150";
            img.alt = juego.name || "Juego sin nombre";

            const titulo = tarjeta.querySelector(".card-title");
            titulo.textContent = juego.name;

            const descripcion = tarjeta.querySelector(".description");
            descripcion.textContent = juego.deck || "Descripción no disponible.";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    fetch(GIANTBOMB_API_URL, {
        headers: {
        "User-Agent": "PixelPleto" 
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error de conexión: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        actualizarTarjetas(data.results);
    })
    .catch(error => {
        console.error("Error al obtener los juegos de GiantBomb", error);
    });
});
