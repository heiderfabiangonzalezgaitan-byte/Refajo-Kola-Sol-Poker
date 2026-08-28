// JavaScript - Gaseosas Sol (Refajo Kola Sol + Poker - Octubre/Verano)

document.addEventListener("DOMContentLoaded", () => {
    
    // Elementos del DOM
    const btnExplorar = document.getElementById("btn-explorar");
    const btnVerVideo = document.getElementById("btn-ver-video");
    const btnUnirse = document.getElementById("btn-unirse");
    const btnNavComprar = document.getElementById("btn-comprar-nav");
    const cardsButtons = document.querySelectorAll(".btn-card");
    
    // Modal Elementos
    const modal = document.getElementById("modal-promo");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const closeModal = document.getElementById("close-modal");
    const btnModalOk = document.getElementById("btn-modal-ok");

    // Mixer Elementos
    const rangeKola = document.getElementById("range-kola");
    const rangePoker = document.getElementById("range-poker");
    const valKola = document.getElementById("val-kola");
    const valPoker = document.getElementById("val-poker");
    const resultText = document.getElementById("result-text");

    // 1. Scroll Suave
    if (btnExplorar) {
        btnExplorar.addEventListener("click", () => {
            document.getElementById("producto").scrollIntoView({ behavior: "smooth" });
        });
    }

    // 2. Abrir Modal para diferentes botones
    function abrirModal(titulo, mensaje) {
        modalTitle.textContent = titulo;
        modalBody.textContent = mensaje;
        modal.style.display = "flex";
    }

    if (btnVerVideo) {
        btnVerVideo.addEventListener("click", () => {
            abrirModal(
                "🎬 Comercial Octubre / Verano", 
                "Cargando el spot oficial de Refajo Kola Sol + Poker. ¡Prepárate para sentir toda la energía del parche!"
            );
        });
    }

    if (btnUnirse) {
        btnUnirse.addEventListener("click", () => {
            abrirModal(
                "🎉 ¡Te uniste a la Fiesta!", 
                "Has quedado registrado para recibir los cupones de descuento especiales de la temporada de Octubre / Verano."
            );
        });
    }

    if (btnNavComprar) {
        btnNavComprar.addEventListener("click", () => {
            abrirModal(
                "🛒 Pedido Express", 
                "Selecciona tu distribuidor de Gaseosas Sol más cercano para recibir tu Refajo bien helado."
            );
        });
    }

    cardsButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const producto = e.target.getAttribute("data-product");
            abrirModal(
                `¡Añadido: ${producto}!`, 
                `Has seleccionado la presentación de ${producto}. Disponible durante toda la temporada de Verano y Fiestas de Octubre.`
            );
        });
    });

    // Cierre de Modal
    closeModal.addEventListener("click", () => modal.style.display = "none");
    btnModalOk.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    // 3. Mezclador Interactivo de Sabor
    if (rangeKola && rangePoker) {
        rangeKola.addEventListener("input", (e) => {
            const kolaVal = e.target.value;
            const pokerVal = 100 - kolaVal;
            
            rangePoker.value = pokerVal;
            valKola.textContent = `${kolaVal}%`;
            valPoker.textContent = `${pokerVal}%`;

            if (kolaVal > 70) {
                resultText.textContent = "🍬 ¡Sabor súper dulce! Domina la esencia de Kola Sol.";
            } else if (kolaVal < 30) {
                resultText.textContent = "🍺 ¡Toque amargo predominante! Estilo refajo fuerte.";
            } else {
                resultText.textContent = "⚡ ¡El balance perfecto! La mezcla oficial Refajo Sol.";
            }
        });
    }

    // 4. Temporizador / Countdown Simulado
    function startTimer() {
        let seconds = 30, minutes = 45;

        setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                if (minutes > 0) minutes--;
            }
            const secElem = document.getElementById("seconds");
            const minElem = document.getElementById("minutes");
            if (secElem) secElem.textContent = seconds < 10 ? `0${seconds}` : seconds;
            if (minElem) minElem.textContent = minutes < 10 ? `0${minutes}` : minutes;
        }, 1000);
    }
    startTimer();
});
