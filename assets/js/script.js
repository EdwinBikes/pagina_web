// Sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

const elementToggleFunc = (element) => {
  if (element) element.classList.toggle("active");
};

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// Testimonial modal
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleTestimonialsModal = () => {
  if (!modalContainer || !overlay) return;
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItems.forEach((item) => {
  item.addEventListener("click", () => {
    const avatar = item.querySelector("[data-testimonials-avatar]");
    const title = item.querySelector("[data-testimonials-title]");
    const text = item.querySelector("[data-testimonials-text]");

    if (avatar && modalImg) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }
    if (title && modalTitle) modalTitle.textContent = title.textContent;
    if (text && modalText) modalText.innerHTML = text.innerHTML;

    toggleTestimonialsModal();
  });
});

if (modalCloseBtn) modalCloseBtn.addEventListener("click", toggleTestimonialsModal);
if (overlay) overlay.addEventListener("click", toggleTestimonialsModal);

// Navigation: works with the existing data-page attributes.
const navbarList = document.querySelector(".navbar-list");
const navbarLinks = document.querySelectorAll(".navbar-link");

if (navbarList) {
  navbarList.addEventListener("click", (event) => {
    const button = event.target.closest(".navbar-link");
    if (!button) return;

    const targetId = button.getAttribute("data-nav-link");
    const targetSection = document.querySelector(`[data-page="${targetId}"]`);
    if (!targetSection) return;

    navbarLinks.forEach((link) => link.classList.remove("active"));
    button.classList.add("active");
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// Compatibility with legacy inline handlers, without adding visual changes.
window.changeSection = window.changeSection || ((sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.openOther = window.openOther || ((sectionId) => {
  const section = document.querySelector(`[data-page="${sectionId}"]`);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
});
