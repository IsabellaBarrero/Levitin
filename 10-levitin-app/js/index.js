document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase 'flecha'
    const flechas = document.querySelectorAll('.flecha');

    // Añade un evento de clic a cada flecha
    flechas.forEach(flecha => {
        flecha.addEventListener('click', () => {
            // Obtiene el valor del atributo 'data-link'
            const link = flecha.getAttribute('data-link');
            // Redirige al usuario a la página especificada
            window.location.href = link;
        });
    });
});