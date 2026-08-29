document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));}
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target);}}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
 const form=document.getElementById("contactForm");
 if(form)form.addEventListener("submit",e=>{e.preventDefault();document.getElementById("formMessage").textContent="¡Mensaje preparado! Conecta este formulario a tu servicio de envío.";form.reset();});
 document.querySelectorAll(".media img").forEach(img=>img.addEventListener("error",()=>{img.classList.add("broken");}));
 const can=document.querySelector(".can-art"),ph=document.querySelector(".can-placeholder");
 if(can&&ph){can.addEventListener("load",()=>ph.style.display="none");can.addEventListener("error",()=>ph.style.display="flex");}
});
