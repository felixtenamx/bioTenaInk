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
