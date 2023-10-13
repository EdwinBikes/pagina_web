// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Function to toggle testimonials modal
const toggleTestimonialsModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event to all testimonial items
testimonialsItems.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    toggleTestimonialsModal();
  });
});

// Add click event to modal close button and overlay
modalCloseBtn.addEventListener("click", toggleTestimonialsModal);
overlay.addEventListener("click", toggleTestimonialsModal);

// Rest of your script...

// Obtén una referencia a la lista de botones de navegación
const navbarList = document.querySelector(".navbar-list");

// Agrega un evento de clic a la lista de botones de navegación
navbarList.addEventListener("click", function (event) {
  // Verifica si el elemento clickeado es un botón de navegación
  if (event.target.classList.contains("navbar-link")) {
    // Obtiene el valor del atributo 'data-nav-link' del botón
    const targetId = event.target.getAttribute("data-nav-link");

    // Busca la sección correspondiente por su atributo 'data-page'
    const targetSection = document.querySelector(`[data-page="${targetId}"]`);

    // Verifica si la sección existe antes de desplazar
    if (targetSection) {
      // Desplaza la ventana del navegador a la sección
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Desmarca todos los botones de navegación y marca el botón actual como activo
      const navbarLinks = document.querySelectorAll(".navbar-link");
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    }
  }
});
