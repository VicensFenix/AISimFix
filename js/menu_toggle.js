// Manipular el DOOM por medio de un evento
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const containerNav = document.querySelector('.container-nav');
    
    // Función para activar el menú despegable
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        containerNav.classList.toggle('active');
    }
    
    // Se activa por un evento de click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Opcional: Cerrar menú al cambiar tamaño de pantalla
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            containerNav.classList.remove('active');
        }
    });
});