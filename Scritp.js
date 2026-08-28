document.addEventListener("DOMContentLoaded", () => {
    const btnDescubrir = document.getElementById("btn-descubrir");

    // Scroll suave hacia la sección de productos al hacer clic en el botón principal
    btnDescubrir.addEventListener("click", () => {
        const seccionProducto = document.getElementById("producto");
        seccionProducto.scrollIntoView({ behavior: "smooth" });
    });
});

// Función de interacción rápida para la campaña
function mostrarAlerta() {
    alert("¡Prepárate para vivir el San Pedro con el sabor único de Refajo Sol!");
}