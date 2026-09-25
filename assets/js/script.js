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

// Modern landing navigation.
document.querySelectorAll("[data-nav-link]").forEach((button) => {
  if (button.closest(".navbar-list")) return;

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const pageId = button.getAttribute("data-nav-link");
    const navButton = document.querySelector('.navbar-link[data-nav-link="' + pageId + '"]');

    showPage(pageId, navButton);

    document.querySelectorAll(".vsv-modern-links button").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-nav-link") === pageId);
    });

    const target = document.querySelector('[data-page="' + pageId + '"]');
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  });
});

// Service cards can navigate to another existing tab.
document.querySelectorAll("[data-open-section]").forEach((card) => {
  card.addEventListener("click", () => {
    showPage(card.getAttribute("data-open-section"));
  });
});

// Form submission: sends the client's data by email.
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector('[name="full_name"]').value.trim();
  const email = document.querySelector('[name="email"]').value.trim();
  const message = document.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert("Completa todos los campos.");
    return;
  }

  const text = `Hola Edwin, quiero contactarte desde tu página web.%0A%0A` +
    `Nombre: ${name}%0A` +
    `Correo: ${email}%0A%0A` +
    `Mensaje:%0A${message}`;

  const whatsappUrl = `https://wa.me/573057135213?text=${text}`;

  window.open(whatsappUrl, "_blank");
  form.reset();
});

// Compatibility with legacy inline handlers.
window.changeSection = window.changeSection || ((sectionId) => showPage(sectionId));
window.openOther = window.openOther || ((sectionId) => showPage(sectionId));

/*-----------------------------------*
  #SERVICE MODAL
*-----------------------------------*/

(function(){
  const modal=document.getElementById('serviceModal');
  const title=document.getElementById('serviceModalTitle');
  const kicker=document.getElementById('serviceModalKicker');
  const intro=document.getElementById('serviceModalIntro');
  const body=document.getElementById('serviceModalBody');
  const buttons=document.querySelectorAll('[data-service]');
  if(!modal||!title||!body) return;
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const card=(media,label,name,text,link='')=>`<article class="service-modal-card">${media}<div class="service-modal-card-content"><small>${esc(label)}</small><h3>${esc(name)}</h3><p>${esc(text)}</p>${link?`<a href="${link}" target="_blank" rel="noreferrer">Ver proyecto ↗</a>`:''}</div></article>`;
  const data={
    community:{kicker:'01 / COMMUNITY MANAGER',title:'Community Manager',intro:'Estrategia, producción y gestión de contenido para marcas, negocios y proyectos comerciales.',html:`
      <p class="service-modal-text">Creo contenido a partir del trabajo real de una marca: procesos, productos, instalaciones, proyectos terminados, fotografía, reels y piezas pensadas para redes sociales.</p>
      <div class="service-modal-grid">
        ${card('<img src="./assets/images/project-1.jpg" alt="Contenido automotriz">','AUTOMOTRIZ','Contenido comercial','Fotografía y piezas visuales para mostrar productos, vehículos y proyectos.')}
        ${card('<img src="./assets/images/project-2.png" alt="Contenido digital">','REDES','Contenido para redes','Reels, publicaciones y piezas visuales adaptadas a plataformas digitales.')}
        ${card('<img src="./assets/images/blog-2.jpg" alt="Producción audiovisual">','VIDEO','Producción audiovisual','Video y fotografía para comunicar el valor real de una empresa.')}
      </div>
      <div class="service-modal-actions"><a class="service-modal-btn" href="https://www.instagram.com/edwinbikes/" target="_blank" rel="noreferrer">Ver Instagram ↗</a><a class="service-modal-btn" href="https://wa.me/573057135213" target="_blank" rel="noreferrer">Hablar sobre un proyecto ↗</a></div>`},
    developer:{kicker:'02 / DESARROLLO',title:'Desarrollador',intro:'Aplicaciones móviles, proyectos web y soluciones digitales desarrolladas a partir de ideas y necesidades concretas.',html:`
      <p class="service-modal-text">Aquí se reúnen proyectos de desarrollo que forman parte de mi recorrido con Flutter, Dart, HTML, CSS, JavaScript y VBA.</p>
      <div class="service-modal-projects">
        ${card('<img src="./assets/images/videos/gif.gif" alt="Widgets Examples">','APP','Widgets Examples','Proyecto de práctica y desarrollo para Android.','https://github.com/EdwinBikes')}
        ${card('<img src="./assets/images/project-1.jpg" alt="House Motors">','APP','House Motors','Proyecto relacionado con el mundo automotriz.','https://github.com/EdwinBikes/house_motors')}
        ${card('<img src="./assets/images/project-2.png" alt="Cinebikes">','FLUTTER','Cinebikes','Aplicación desarrollada con Flutter.','https://github.com/EdwinBikes')}
        ${card('<img src="./assets/images/project-3.jpg" alt="Portafolio">','WEB','Portafolio Edwin Bikes','Proyecto web y evolución del portafolio personal.','https://portfolio-edwinbikes.vercel.app/')}
        ${card('<img src="./assets/images/project-4.png" alt="Clone Netflix">','APP','Clone de Netflix','Proyecto de práctica de interfaz y desarrollo.','https://github.com/EdwinBikes')}
        ${card('<img src="./assets/images/project-5.png" alt="Edwin Música">','FLUTTER','Edwin Música','Aplicación musical desarrollada con Flutter.','https://github.com/EdwinBikes')}
      </div>`},
    fpv:{kicker:'03 / DRONE FPV',title:'Piloto de Drone FPV',intro:'Vuelos FPV y producción aérea para automotriz, inmobiliario, turismo, eventos y contenido comercial.',html:`
      <p class="service-modal-text">El FPV es una herramienta narrativa: movimiento, velocidad y perspectiva para crear tomas que complementen la historia de un proyecto.</p>
      <div class="service-modal-grid">
        ${card('<img src="./assets/images/blog-1.jpg" alt="Ecoparque">','FPV','Ecoparque de Chinátá','Producción aérea en entorno natural.')}
        ${card('<img src="./assets/images/blog-2.jpg" alt="Renault 9">','AUTOMOTRIZ','Renault 9 + FPV','Proyecto automotriz con tomas FPV.')}
        ${card('<img src="./assets/images/playlist.png" alt="Playlist FPV">','SHOWREEL','Videos FPV','Selección de trabajos publicados en YouTube.','https://youtube.com/@edwin-bikes')}
      </div>
      <div class="service-modal-actions"><a class="service-modal-btn" href="https://youtube.com/playlist?list=PLllYEQQooZSYgctQ5e1r3-467F3_5S8FN" target="_blank" rel="noreferrer">Ver playlist ↗</a><a class="service-modal-btn" href="https://wa.me/573057135213" target="_blank" rel="noreferrer">Cotizar producción ↗</a></div>`},
    '3d':{kicker:'04 / FABRICACIÓN',title:'Impresión 3D',intro:'Diseño, prototipado e impresión de piezas personalizadas, funcionales y creativas.',html:`
      <p class="service-modal-text">Esta sección está preparada para mostrar fotografías y videos reales de los artículos impresos: desde el diseño y la preparación hasta la pieza terminada.</p>
      <div class="service-modal-grid">
        ${card('<img src="./assets/images/project-5.png" alt="Impresión 3D">','IMPRESIÓN','Pieza personalizada','Galería de artículos y piezas impresas.')}
        ${card('<img src="./assets/images/project-7.png" alt="Prototipo 3D">','PROTOTIPO','Diseño y prototipado','Modelos, pruebas y piezas funcionales.')}
        ${card('<img src="./assets/images/project-9.png" alt="Pieza terminada">','FINAL','Pieza terminada','Fotografías reales del resultado final.')}
      </div>
      <div class="service-modal-card" style="margin-top:13px"><video controls preload="metadata" href="https://www.youtube.com/embed/bt7FfQpbIvk?si=t3PSJZYipEb6LGVY" autoplay; clipboard-write; gyroscope; picture-in-picture;"><source src="./assets/videos/video.mp4" type="video/mp4">Tu navegador no puede reproducir este video.</video><div class="service-modal-card-content"><small>VIDEO</small><h3>Proceso de impresión</h3><p>Cuando tengas el video real, guárdalo como <strong>assets/videos/impresion3d.mp4</strong>.</p></div></div>`}
  };
  function open(key){const d=data[key];if(!d)return;kicker.textContent=d.kicker;title.textContent=d.title;intro.textContent=d.intro;body.innerHTML=d.html;modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('service-modal-open');setTimeout(()=>modal.querySelector('.service-modal-close')?.focus(),30)}
  function close(){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('service-modal-open')}
  buttons.forEach(b=>b.addEventListener('click',()=>open(b.dataset.service)));
  modal.querySelectorAll('[data-service-close]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))close()});
})();

/*-----------------------------------*
  #DYNAMIC BODY VIDEO
*-----------------------------------*/

(function(){
  const video=document.getElementById("vsvBackgroundVideo");
  const source=document.getElementById("vsvBackgroundVideoSource");

  if(!video||!source) return;

  const videos={
    default:"./assets/videos/hero.mp4",
    community:"./assets/videos/community-manager.mp4",
    developer:"./assets/videos/desarrollo.mp4",
    fpv:"./assets/videos/drone-fpv.mp4",
    "3d":"./assets/videos/impresion-3d.mp4",
    resumen:"./assets/videos/desarrollo.mp4",
    portafolio:"./assets/videos/hero.mp4",
    blog:"./assets/videos/drone-fpv.mp4",
    contactame:"./assets/videos/hero.mp4"
  };

  function setBackgroundVideo(key){
    const next=videos[key]||videos.default;

    if(source.getAttribute("src")===next){
      video.play().catch(()=>{});
      return;
    }

    video.pause();
    source.src=next;
    video.load();
    video.play().catch(()=>{});
  }

  document.querySelectorAll("[data-service]").forEach(button=>{
    button.addEventListener("click",()=>{
      setBackgroundVideo(button.dataset.service);
    });
  });

  document.querySelectorAll("[data-nav-link]").forEach(button=>{
    button.addEventListener("click",()=>{
      setBackgroundVideo(button.dataset.navLink);
    });
  });

  setBackgroundVideo("default");
})();
