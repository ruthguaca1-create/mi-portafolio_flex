// ==============================
// MENÚ RESPONSIVE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("activo");
});

// ==============================
// BOTÓN VOLVER ARRIBA
// ==============================

const boton = document.getElementById("boton");

window.addEventListener("scroll", function () {

    if (window.scrollY > 250) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }

});

boton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==============================
// EFECTO EN LOS PROYECTOS
// ==============================

const proyectos = document.querySelectorAll(".proyectos-grid a");

proyectos.forEach(function (proyecto) {

    proyecto.addEventListener("mouseenter", function () {
        proyecto.style.transform = "scale(1.05)";
    });

    proyecto.addEventListener("mouseleave", function () {
        proyecto.style.transform = "scale(1)";
    });

});