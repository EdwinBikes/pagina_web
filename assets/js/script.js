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

// Navigation between the existing article tabs.
const navbarList = document.querySelector(".navbar-list");
const navbarLinks = document.querySelectorAll(".navbar-link");
const articles = document.querySelectorAll("main article[data-page]");

const showPage = (pageId, activeButton = null) => {
  const targetPage = document.querySelector(`article[data-page="${pageId}"]`);
  if (!targetPage) return;

  articles.forEach((article) => article.classList.remove("active"));
  targetPage.classList.add("active");

  navbarLinks.forEach((link) => link.classList.remove("active"));
  if (activeButton) activeButton.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
};

if (navbarList) {
  navbarList.addEventListener("click", (event) => {
    const button = event.target.closest(".navbar-link");
    if (!button) return;

    event.preventDefault();
    showPage(button.getAttribute("data-nav-link"), button);
  });
}

// Service cards can navigate to another existing tab.
document.querySelectorAll("[data-open-section]").forEach((card) => {
  card.addEventListener("click", () => {
    showPage(card.getAttribute("data-open-section"));
  });
});

// Compatibility with legacy inline handlers.
window.changeSection = window.changeSection || ((sectionId) => showPage(sectionId));
window.openOther = window.openOther || ((sectionId) => showPage(sectionId));
