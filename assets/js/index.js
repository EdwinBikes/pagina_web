// Selecciona todos los elementos con la clase "section" y guárdalos en una variable
const sections = document.querySelectorAll('.section');

// Selecciona todos los botones de navegación
const navigationButtons = document.querySelectorAll('[data-nav-link]');

// Agrega un evento de clic a cada botón de navegación
navigationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtiene el valor del atributo 'data-nav-link' del botón
        const targetSectionId = button.getAttribute('data-nav-link');

        // Oculta todas las secciones
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Muestra la sección correspondiente al botón clickeado
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo(0, 0);
        }
    });
});
