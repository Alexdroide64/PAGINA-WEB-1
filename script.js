// Espera a que la página esté completamente cargada
window.addEventListener("load", function () {
// Espera 1.5 segundos antes de ocultar el loader
    setTimeout(function () {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
    }, 1000); // 1500 milisegundos = 1.5 segundos
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Aquí podrías hacer una validación personalizada o enviar los datos vía AJAX
        alert("Formulario enviado. Pronto te contactaremos. 🚀");
        form.reset();
    });
});