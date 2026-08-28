document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.querySelector(".nav");
  if (menuBtn && nav) menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

  // Animaciones de entrada
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Logo: al subir un PNG, se guarda localmente para reutilizarlo entre páginas.
  const logoInput = document.getElementById("logoInput");
  const logoSlots = document.querySelectorAll("#logoSlot");
  const savedLogo = localStorage.getItem("kolaSolLogo");
  if (savedLogo) applyLogo(savedLogo);

  if (logoInput) {
    logoInput.addEventListener("change", () => {
      const file = logoInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        localStorage.setItem("kolaSolLogo", e.target.result);
        applyLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  function applyLogo(src) {
    logoSlots.forEach(slot => {
      slot.innerHTML = "";
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Logo Kola Sol + Poker";
      slot.appendChild(img);
    });
  }

  const gallery = document.getElementById("mediaGallery");
  const flyerInput = document.getElementById("flyerInput");
  const videoInput = document.getElementById("videoInput");

  function addMedia(files, type) {
    if (!gallery || !files.length) return;
    const empty = gallery.querySelector(".empty-state");
    if (empty) empty.remove();

    [...files].forEach(file => {
      const url = URL.createObjectURL(file);
      const item = document.createElement("div");
      item.className = "media-item reveal visible";

      const remove = document.createElement("button");
      remove.className = "remove-media";
      remove.type = "button";
      remove.textContent = "×";
      remove.title = "Quitar";
      remove.onclick = () => {
        URL.revokeObjectURL(url);
        item.remove();
        if (!gallery.children.length) gallery.innerHTML = '<div class="empty-state">Tus piezas multimedia aparecerán aquí.</div>';
      };

      let media;
      if (type === "video") {
        media = document.createElement("video");
        media.controls = true;
        media.src = url;
      } else {
        media = document.createElement("img");
        media.src = url;
        media.alt = file.name;
      }
      item.appendChild(media);
      item.appendChild(remove);
      gallery.appendChild(item);
    });
  }

  if (flyerInput) flyerInput.addEventListener("change", e => addMedia(e.target.files, "image"));
  if (videoInput) videoInput.addEventListener("change", e => addMedia(e.target.files, "video"));

  // Formulario demo: no envía datos a un servidor.
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const msg = document.getElementById("formMessage");
      msg.textContent = "¡Mensaje preparado! Este formulario es una demostración y aún no está conectado a un servidor.";
      form.reset();
    });
  }
});
