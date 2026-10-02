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

if (form) form.addEventListener("submit", (e) => {
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
  #SERVICE MODAL + SOCIAL VIDEOS
*-----------------------------------*/

(function(){
  const modal=document.getElementById('serviceModal');
  const title=document.getElementById('serviceModalTitle');
  const kicker=document.getElementById('serviceModalKicker');
  const intro=document.getElementById('serviceModalIntro');
  const body=document.getElementById('serviceModalBody');
  const buttons=document.querySelectorAll('[data-service]');
  if(!modal||!title||!body) return;

  /*
    SOLO NECESITAS EDITAR ESTA LISTA.
    Puedes pegar enlaces de YouTube, Instagram o TikTok.
  */
  // ============================================================
  // IMÁGENES DE REFERENCIA
  // Cuando subas tus fotos nuevas, cambia SOLO estas rutas.
  // ============================================================
  const galleryImages={
    community:[
      "./assets/images/project-3.jpg",
      "./assets/images/project-1.jpg",
      "./assets/images/project-2.png"
    ],
    developer:[
      "./assets/images/project-1.jpg",
      "./assets/images/project-2.png",
      "./assets/images/project-3.jpg",
      "./assets/images/project-4.png",
      "./assets/images/project-5.png"
    ],
    fpv:[
      "./assets/images/blog-1.jpg",
      "./assets/images/blog-2.jpg"
    ],
    "3d":[
      "./assets/images/project-5.png",
      "./assets/images/project-7.png",
      "./assets/images/project-9.png"
    ]
  };

  const videos={
    fpv:[
      "https://youtu.be/bt7FfQpbIvk",
      "https://youtu.be/D-hYdWwSdtY",
      "https://youtu.be/ImACEWQ0Gs0",
      "https://www.instagram.com/p/C3A-GePuWY-/"
    ],

    community:[
      "https://www.instagram.com/p/DVJ2Yu7gAHX/",
      "https://www.instagram.com/p/DcHXtKHv4s7/",
      "https://www.tiktok.com/@edwinbikes/video/7242420768716442886",
      "https://www.tiktok.com/@el.chef.del.tolima/video/7577919353467817223"
    ],

    developer:[
      "https://www.instagram.com/p/CcuHomcu0P8/",
      "https://www.instagram.com/p/C4BXJO9OtWI/",
      "https://www.instagram.com/p/DGYvxrRx2Jw/"
    ],

    "3d":[
      "https://www.instagram.com/p/C6CFE_IuznO/",
      "https://www.instagram.com/p/CzbdqwOOgsr/"
    ]
  };

  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  const card=(media,label,name,text,link='') =>
    '<article class="service-modal-card">'+media+
    '<div class="service-modal-card-content">'+
    '<small>'+esc(label)+'</small>'+
    '<h3>'+esc(name)+'</h3>'+
    '<p>'+esc(text)+'</p>'+
    (link?'<a href="'+esc(link)+'" target="_blank" rel="noreferrer">Ver proyecto ↗</a>':'')+
    '</div></article>';

  function youtubeId(url){
    try{
      const u=new URL(url);
      if(u.hostname==='youtu.be') return u.pathname.split('/').filter(Boolean)[0]||null;
      if(u.hostname.includes('youtube.com')){
        if(u.pathname==='/watch') return u.searchParams.get('v');
        const parts=u.pathname.split('/').filter(Boolean);
        if(parts[0]==='shorts'||parts[0]==='embed') return parts[1]||null;
      }
    }catch(e){}
    return null;
  }

  function socialType(url){
    try{
      const host=new URL(url).hostname.replace(/^www\./,'').toLowerCase();
      if(host==='youtube.com'||host==='youtu.be') return 'youtube';
      if(host==='instagram.com') return 'instagram';
      if(host==='tiktok.com') return 'tiktok';
    }catch(e){}
    return 'unknown';
  }

  function instagramPermalink(url){
    try{
      const u=new URL(url);
      if(u.hostname.replace(/^www\./,'').toLowerCase()!=='instagram.com') return null;
      const path=u.pathname;
      if(path.startsWith('/reel/')||path.startsWith('/p/')||path.startsWith('/tv/')) return 'https://www.instagram.com'+path;
    }catch(e){}
    return null;
  }

  function tiktokPermalink(url){
    try{
      const u=new URL(url);
      if(u.hostname.replace(/^www\./,'').toLowerCase()!=='tiktok.com') return null;
      if(u.pathname.includes('/video/')) return 'https://www.tiktok.com'+u.pathname;
    }catch(e){}
    return null;
  }

  function youtubeEmbed(url){
    const id=youtubeId(url);
    if(!id) return null;

    return '<div class="vsv-social-video vsv-youtube-video">'+
      '<iframe src="https://www.youtube.com/embed/'+encodeURIComponent(id)+'?rel=0&playsinline=1" '+
      'title="Video de YouTube" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'+
      '</div>';
  }

  function instagramEmbed(url){
    const permalink=instagramPermalink(url);
    if(!permalink) return null;

    return '<div class="vsv-social-video vsv-instagram-video">'+
      '<blockquote class="instagram-media" data-instgrm-permalink="'+esc(permalink)+'" data-instgrm-version="14" style="background:transparent; border:0; margin:0 auto; max-width:540px; min-width:326px; width:calc(100% - 20px);"></blockquote>'+
      '</div>';
  }

  function tiktokEmbed(url){
    const permalink=tiktokPermalink(url);
    if(!permalink) return null;

    return '<div class="vsv-social-video vsv-tiktok-video">'+
      '<blockquote class="tiktok-embed" cite="'+esc(permalink)+'" data-video-id="'+esc(permalink.split('/').pop())+'" style="max-width:605px;min-width:325px;margin:0 auto;">'+
      '<section><a target="_blank" href="'+esc(permalink)+'">Ver video en TikTok</a></section></blockquote>'+
      '</div>';
  }

  function loadExternalScript(src,id){
    const existing=document.getElementById(id);
    if(existing) return existing._vsvPromise||Promise.resolve(existing);

    const script=document.createElement('script');
    script.id=id;
    script.async=true;
    script.src=src;
    script._vsvPromise=new Promise((resolve)=>{
      script.addEventListener('load',()=>resolve(script),{once:true});
      script.addEventListener('error',()=>resolve(script),{once:true});
    });
    document.body.appendChild(script);
    return script._vsvPromise;
  }

  function processSocialEmbeds(){
    if(window.instgrm&&window.instgrm.Embeds) window.instgrm.Embeds.process();
    if(window.tiktokEmbed&&window.tiktokEmbed.lib&&typeof window.tiktokEmbed.lib.render==='function') window.tiktokEmbed.lib.render();
  }

  function renderSocialVideo(url,index){
    const type=socialType(url);

    if(type==='youtube') return youtubeEmbed(url)||fallbackVideo(url,index);
    if(type==='instagram') return instagramEmbed(url)||fallbackVideo(url,index);
    if(type==='tiktok') return tiktokEmbed(url)||fallbackVideo(url,index);

    return fallbackVideo(url,index);
  }

  function fallbackVideo(url,index){
    return '<article class="service-modal-card vsv-link-card">'+
      '<div class="service-modal-card-content">'+
      '<small>VIDEO '+String(index+1).padStart(2,'0')+'</small>'+
      '<h3>Contenido externo</h3>'+
      '<p>Este enlace no pudo convertirse automáticamente en un reproductor.</p>'+
      '<a href="'+esc(url)+'" target="_blank" rel="noreferrer">Abrir video ↗</a>'+
      '</div></article>';
  }

  function renderImageGallery(key){
    const list=Array.isArray(galleryImages[key])?galleryImages[key]:[];
    if(!list.length) return '';
    return '<div class="vsv-reference-gallery">'+
      list.map((src,index)=>
        '<figure class="vsv-reference-image">'+
        '<img src="'+esc(src)+'" alt="Imagen de referencia '+String(index+1).padStart(2,'0')+'" loading="lazy">'+
        '</figure>'
      ).join('')+
      '</div>';
  }

  function renderVideoGallery(key){
    const list=Array.isArray(videos[key])?videos[key]:[];

    if(!list.length){
      return '<p class="service-modal-text">Próximamente encontrarás aquí videos y trabajos de esta especialidad.</p>';
    }

    return '<div class="vsv-social-video-grid">'+
      list.map((url,index)=>renderSocialVideo(url,index)).join('')+
      '</div>';
  }

  function loadEmbedLibraries(){
    const allVideos=Object.values(videos).flat();

    if(allVideos.some(url=>socialType(url)==='instagram')){
      loadExternalScript('https://www.instagram.com/embed.js','vsv-instagram-embed-script').then(()=>processSocialEmbeds());
    }

    if(allVideos.some(url=>socialType(url)==='tiktok')){
      loadExternalScript('https://www.tiktok.com/embed.js','vsv-tiktok-embed-script').then(()=>processSocialEmbeds());
    }
  }

  const data={
    community:{
      kicker:'01 / COMMUNITY MANAGER',
      title:'Community Manager',
      intro:'Estrategia, producción y gestión de contenido para marcas, negocios y proyectos comerciales.',
      html:
        '<p class="service-modal-text">Creo contenido a partir del trabajo real de una marca: procesos, productos, instalaciones, proyectos terminados, fotografía, reels y piezas pensadas para redes sociales.</p>'+
        renderVideoGallery('community')+
        '<div class="service-modal-actions"><a class="service-modal-btn" href="https://www.instagram.com/edwinbikes/" target="_blank" rel="noreferrer">Ver Instagram ↗</a><a class="service-modal-btn" href="https://wa.me/573057135213" target="_blank" rel="noreferrer">Hablar sobre un proyecto ↗</a></div>'
    },

    developer:{
      kicker:'02 / DESARROLLO',
      title:'Desarrollador',
      intro:'Aplicaciones móviles, proyectos web y soluciones digitales desarrolladas a partir de ideas y necesidades concretas.',
      html:
        '<p class="service-modal-text">Aquí se reúnen proyectos de desarrollo que forman parte de mi recorrido con Flutter, Dart, HTML, CSS, JavaScript y VBA.</p>'+
        '<div class="service-modal-projects">'+
          card('<img src="./assets/images/videos/gif.gif" alt="Widgets Examples">','APP','Widgets Examples','Proyecto de práctica y desarrollo para Android.','https://github.com/EdwinBikes')+
          card(galleryImages.developer[0]?'<img src="'+galleryImages.developer[0]+'" alt="House Motors">':'','APP','House Motors','Proyecto relacionado con el mundo automotriz.','https://github.com/EdwinBikes/house_motors')+
          card(galleryImages.developer[1]?'<img src="'+galleryImages.developer[1]+'" alt="Cinebikes">':'','FLUTTER','Cinebikes','Aplicación desarrollada con Flutter.','https://github.com/EdwinBikes')+
          card(galleryImages.developer[2]?'<img src="'+galleryImages.developer[2]+'" alt="Portafolio">':'','WEB','Portafolio Edwin Bikes','Proyecto web y evolución del portafolio personal.','https://portfolio-edwinbikes.vercel.app/')+
          card(galleryImages.developer[3]?'<img src="'+galleryImages.developer[3]+'" alt="Clone Netflix">':'','APP','Clone de Netflix','Proyecto de práctica de interfaz y desarrollo.','https://github.com/EdwinBikes')+
          card(galleryImages.developer[4]?'<img src="'+galleryImages.developer[4]+'" alt="Edwin Música">':'','FLUTTER','Edwin Música','Aplicación musical desarrollada con Flutter.','https://github.com/EdwinBikes')+
        '</div>'+
        '<div style="margin-top:20px">'+renderVideoGallery('developer')+'</div>'
    },

    fpv:{
      kicker:'03 / DRONE FPV',
      title:'Piloto de Drone FPV',
      intro:'Vuelos FPV y producción aérea para automotriz, inmobiliario, turismo, eventos y contenido comercial.',
      html:
        '<p class="service-modal-text">El FPV es una herramienta narrativa: movimiento, velocidad y perspectiva para crear tomas que complementen la historia de un proyecto.</p>'+
        renderImageGallery('fpv')+
        '<div class="service-modal-grid">'+
          card('<img src="'+galleryImages.fpv[0]+'" alt="Ecoparque">','FPV','Ecoparque de Chinátá','Producción aérea en entorno natural.')+
          card('<img src="'+galleryImages.fpv[1]+'" alt="Renault 9">','AUTOMOTRIZ','Renault 9 + FPV','Proyecto automotriz con tomas FPV.')+
        '</div>'+
        '<div style="margin-top:20px">'+renderVideoGallery('fpv')+'</div>'+
        '<div class="service-modal-actions"><a class="service-modal-btn" href="https://youtube.com/playlist?list=PLllYEQQooZSYgctQ5e1r3-467F3_5S8FN" target="_blank" rel="noreferrer">Ver playlist ↗</a><a class="service-modal-btn" href="https://wa.me/573057135213" target="_blank" rel="noreferrer">Cotizar producción ↗</a></div>'
    },

    '3d':{
      kicker:'04 / FABRICACIÓN',
      title:'Impresión 3D',
      intro:'Diseño, prototipado e impresión de piezas personalizadas, funcionales y creativas.',
      html:
        '<p class="service-modal-text">Esta sección está preparada para mostrar fotografías y videos reales de los artículos impresos: desde el diseño y la preparación hasta la pieza terminada.</p>'+
        renderImageGallery('3d')+
        '<div class="service-modal-grid">'+
          card('<img src="'+galleryImages["3d"][0]+'" alt="Impresión 3D">','IMPRESIÓN','Pieza personalizada','Galería de artículos y piezas impresas.')+
          card('<img src="'+galleryImages["3d"][1]+'" alt="Prototipo 3D">','PROTOTIPO','Diseño y prototipado','Modelos, pruebas y piezas funcionales.')+
          card('<img src="'+galleryImages["3d"][2]+'" alt="Pieza terminada">','FINAL','Pieza terminada','Fotografías reales del resultado final.')+
        '</div>'+
        '<div style="margin-top:20px">'+renderVideoGallery('3d')+'</div>'
    }
  };

  function open(key){
    const d=data[key];
    if(!d)return;

    kicker.textContent=d.kicker;
    title.textContent=d.title;
    intro.textContent=d.intro;
    body.innerHTML=d.html;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('service-modal-open');

    processSocialEmbeds();
    setTimeout(()=>modal.querySelector('.service-modal-close')?.focus(),30);
  }

  function close(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('service-modal-open');
  }

  buttons.forEach(b=>b.addEventListener('click',()=>open(b.dataset.service)));
  modal.querySelectorAll('[data-service-close]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))close()});

  function injectSocialEmbedStyles(){
    if(document.getElementById('vsv-social-embed-styles')) return;

    const style=document.createElement('style');
    style.id='vsv-social-embed-styles';
    style.textContent=
      '.vsv-social-video-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:16px;align-items:start;}'+
      '.vsv-social-video{width:100%;border-radius:12px;overflow:hidden;background:#111;min-width:0;}'+
      '.vsv-youtube-video{aspect-ratio:16/9;}'+
      '.vsv-youtube-video iframe{display:block;width:100%;height:100%;border:0;}'+
      '.vsv-instagram-video,.vsv-tiktok-video{display:flex;justify-content:center;align-items:flex-start;min-height:420px;background:transparent;padding:0;}'+
      '.vsv-instagram-video blockquote,.vsv-tiktok-video blockquote{margin:0 auto!important;background:transparent!important;border:0!important;}'+
      '.vsv-link-card{min-height:180px;}'+
      '@media(max-width:700px){.vsv-social-video-grid{grid-template-columns:1fr;}.vsv-instagram-video,.vsv-tiktok-video{min-height:0;}}';

    document.head.appendChild(style);
  }

  injectSocialEmbedStyles();
  loadEmbedLibraries();
})();

/*-----------------------------------*
  #DYNAMIC BODY VIDEO
*-----------------------------------*/

(function(){
  const video=document.getElementById("vsvBackgroundVideo");
  const source=document.getElementById("vsvBackgroundVideoSource");

  if(!video||!source) return;

  const videos={
    default:"./assets/videos/video.mp4",
    community:"./assets/videos/video.mp4",
    developer:"./assets/videos/video.mp4",
    fpv:"./assets/videos/video.mp4",
    "3d":"./assets/videos/video.mp4",
    resumen:"./assets/videos/video.mp4",
    portafolio:"./assets/videos/video.mp4",
    blog:"./assets/videos/video.mp4",
    contactame:"./assets/videos/video.mp4"
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
