// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

const elementToggleFunc = (elem) => {
  if (elem) {
    elem.classList.toggle("active");
  }
};

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", () => {
    elementToggleFunc(sidebar);
  });
}

// Testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleTestimonialsModal = () => {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

if (testimonialsItems.length) {
  testimonialsItems.forEach((item) => {
    item.addEventListener("click", () => {
      const avatar = item.querySelector("[data-testimonials-avatar]");
      const title = item.querySelector("[data-testimonials-title]");
      const text = item.querySelector("[data-testimonials-text]");

      if (avatar && modalImg) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
      }

      if (title && modalTitle) {
        modalTitle.innerHTML = title.innerHTML;
      }

      if (text && modalText) {
        modalText.innerHTML = text.innerHTML;
      }

      toggleTestimonialsModal();
    });
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", toggleTestimonialsModal);
}

if (overlay) {
  overlay.addEventListener("click", toggleTestimonialsModal);
}

// Navigation buttons
const navbarList = document.querySelector(".navbar-list");
const navbarLinks = document.querySelectorAll(".navbar-link");

const activateNavigation = (targetButton) => {
  navbarLinks.forEach((link) => link.classList.remove("active"));
  if (targetButton) {
    targetButton.classList.add("active");
  }
};

if (navbarList) {
  navbarList.addEventListener("click", function (event) {
    const button = event.target.closest(".navbar-link");

    if (!button) return;

    const targetId = button.getAttribute("data-nav-link");
    const targetSection = document.querySelector(`[data-page="${targetId}"]`);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      activateNavigation(button);
    }
  });
}

// Service cards open sections
const serviceButtons = document.querySelectorAll("[data-open-section]");

serviceButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = button.getAttribute("data-open-section");
    const targetSection = document.querySelector(`[data-page="${targetId}"]`);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Form logic
const form = document.querySelector("[data-form]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formBtn.innerHTML = "<span>Mensaje enviado</span>";
    formBtn.disabled = true;
  });
}

// Safe fallback for old script references
if (typeof window.changeSection === "undefined") {
  window.changeSection = function (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
}

if (typeof window.openOther === "undefined") {
  window.openOther = function (sectionId) {
    const section = document.querySelector(`[data-page="${sectionId}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
}
