// KOLA SOL × POKER — INTERACCIONES
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // Animaciones al entrar en pantalla
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Formulario demo
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      message.textContent = "¡Gracias! El formulario funciona como demostración. Conecta aquí tu servicio de envío.";
      form.reset();
    });
  }

  // Detecta si un flyer no existe y mantiene el bloque visual.
  document.querySelectorAll(".media img").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      img.parentElement.classList.add("placeholder");
    });
  });
});'''

readme = r'''KOLA SOL × POKER — SITIO WEB

1. ABRIR
Abre index.html en Chrome, Edge o Firefox.

2. LOGOS
En index.html busca:
  <img src="assets/logo-kola-sol.png">
  <img src="assets/logo-poker.png">

Pon tus dos PNG dentro de la carpeta assets con esos mismos nombres.
También puedes cambiar los nombres directamente en el HTML.

3. MOCKUP DE LATA 350 ML
En index.html busca:
  <img class="can-art" src="assets/etiqueta-lata.png">

Pon ahí tu diseño de etiqueta como PNG/JPG. El CSS lo presenta automáticamente dentro del mockup de lata.

IMPORTANTE:
Para que el mockup quede realmente basado en TU diseño, reemplaza etiqueta-lata.png por la imagen final de tu etiqueta.
Si quieres que yo haga un mockup más fiel a tu lata real, sube la imagen de la etiqueta/diseño y puedo trabajar a partir de ella.

4. FLYERS
En index.html busca:
  assets/flyer-01.jpg
  assets/flyer-02.jpg

Reemplaza esos archivos por tus flyers o cambia sus nombres en el código.

Para agregar otro flyer, duplica un bloque <article class="card"> dentro de .cards.

5. VIDEO
En index.html busca:
  assets/publicidad.mp4

Pon tu video MP4 en assets con ese nombre o cambia el nombre en:
  <source src="assets/publicidad.mp4" type="video/mp4">

6. GALERÍA
En index.html busca:
  assets/galeria-01.jpg
  assets/galeria-02.jpg
  assets/galeria-03.jpg
  assets/galeria-04.jpg

Puedes reemplazarlos por tus imágenes.
Para agregar más, duplica:
  <figure class="gallery-item"> ... </figure>

7. REDES SOCIALES
Al final de index.html, dentro de .socials, cambia los href:
  https://facebook.com/
  https://instagram.com/
  https://tiktok.com/
  https://youtube.com/

por los enlaces reales.

8. TIPOGRAFÍA
Todo el sitio está configurado en Times New Roman como solicitaste.

9. RESPONSIVE
El sitio se adapta a PC, tablet y celular.
El menú se convierte en menú hamburguesa en pantallas pequeñas.

10. ESTRUCTURA
Todo Inicio, Campaña, Galería y Contacto está en UN SOLO index.html y navega por secciones mediante anclas (#inicio, #campana, #galeria, #contacto).
'''

for name, content in {
    "index.html": index_html,
    "style.css": style_css,
    "script.js": script_js,
    "README.txt": readme
}.items():
    (root / name).write_text(content, encoding="utf-8")

# Agregar la imagen conceptual generada como referencia del diseño.
# No se usa automáticamente como contenido del sitio para no mezclarla con la identidad real del usuario.
concept = Path("/mnt/data/a_high_resolution_promotional_website_landing_page.png")
if concept.exists():
    (root / "mockup-referencia.png").write_bytes(concept.read_bytes())

zip_path = Path("/mnt/data/kola_sol_poker_web.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for p in root.rglob("*"):
        if p.is_file():
            z.write(p, p.relative_to(root))

print(f"Proyecto creado: {zip_path}")
print("Incluye index.html, style.css, script.js, README.txt, assets/ y mockup-referencia.png")
});
