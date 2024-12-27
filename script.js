const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
const btnAceptarCookies = document.getElementById('btn-aceptar-cookies');
const btnRechazarCookies = document.getElementById('btn-rechazar-cookies');

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
}

btnAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
    localStorage.setItem('cookies-aceptadas', true);
    
    // Aquí puedes activar las cookies que necesites
});

btnRechazarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
    localStorage.setItem('cookies-aceptadas', false);
    
    // Aquí puedes desactivar las cookies no esenciales
});

fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Inicializar el menú hamburguesa DESPUÉS de cargar el header
            initializeHamburgerMenu();
        })
        .catch(error => console.error('Error cargando el header:', error));

    // Cargar el footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error cargando el footer:', error));

    // Cargar el politica de cookies
    fetch('politicaCookies.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cookies-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error cargando la Política de Cookies:', error));
