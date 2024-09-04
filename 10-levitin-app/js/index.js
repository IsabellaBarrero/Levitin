/* document.addEventListener('DOMContentLoaded', () => {
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
}); */

const saludo = document.querySelector('.saludo');

let nombreUsuario = JSON.parse(localStorage.getItem('user'));

saludo.innerHTML = `Hola ${saludo.userName} 🎶🎶`


const btnIniciarSesion = document.querySelector('.inicio-sesion');
const btnRegistro = document.querySelector('.registro');
const saludoUsuario = document.querySelector('.saludo');
const container = document.querySelector('.card-container1');



// Verifica si el usuario está registrado 
function verificarSesion() {
    let currentUser = JSON.parse(localStorage.getItem('user'));

    if (currentUser) {
        // Si hay un usuario logueado, mostrar su nombre y ocultar botones
        saludoUsuario.textContent = `Bienvenido, ${currentUser.userName} 🎶🎶`;
        btnIniciarSesion.style.display = 'none';
        btnRegistro.style.display = 'none';
    } else {
        // Si no hay usuario logueado, mostrar los botones y ocultar el nombre
        saludoUsuario.textContent = '';
        btnIniciarSesion.style.display = 'inline-block';
        btnRegistro.style.display = 'inline-block';
    }
}


document.addEventListener('DOMContentLoaded', verificarSesion);

// Funcion para las cards
function mostrarResults(results) {
    results.forEach( element => {
        let card = document.createElement('div');
        card.classList.add("card")
    
        card.innerHTML = `
        <div class="card">
                <div class="card-icon">${element.icon}</div>
                <hr class="divider">
                <h1 id="Texto">MÓDULO 1</h1>
                <p class="card-text">La introducción a la psicología musical:
                    Abarcaremos tanto la historia y 
                    evolución cómo la importancia y
                    prácticas de la psicología musical</p>
                    <div class="flecha" data-link="./vistas/modulo1/tema1.html">➡️</div>
            </div>
        `
    
        container.appendChild(card);
    })
}