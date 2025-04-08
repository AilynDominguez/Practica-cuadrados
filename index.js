document.querySelectorAll(".square, .CuadroUno").forEach(el => { 
    el.addEventListener("mouseenter", () => el.style.background = "linear-gradient(to bottom,rgb(80, 209, 55),rgb(102, 230, 17))");
    el.addEventListener("mouseleave", () => el.style.background = el.classList.contains("CajaUno") 
        ? "linear-gradient(to bottom,rgb(255, 174, 0, 0.767),rgb(255, 81, 0))" 
        : "linear-gradient(to bottom, rgba(255, 174, 0, 0.767), rgb(255, 81, 0))");
});