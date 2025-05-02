// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const botones = {
        'show-gallery': 'galeria-content',
        'show-gallery-two': 'galeria-content-two',
        'show-gallery-three': 'galeria-content-tree'
    };

    const secciones = Object.values(botones).map(id => document.getElementById(id));

    Object.entries(botones).forEach(([botonId, seccionId]) => {
        const boton = document.getElementById(botonId);
        const seccionMostrar = document.getElementById(seccionId);

        boton.addEventListener('click', () => {
            secciones.forEach(seccion => {
                if (seccion === seccionMostrar) {
                    seccion.classList.remove('hidden');
                } else {
                    seccion.classList.add('hidden');
                }
            });
        });
    });
});
