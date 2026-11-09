document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});
// ===== LIGHTBOX =====
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector(".lightbox-img");
const lbCaption = lightbox.querySelector(".lightbox-caption");
const lbClose = lightbox.querySelector(".lightbox-close");

// Al pinchar en un enlace con la clase js-lightbox...
document.querySelectorAll(".js-lightbox").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();                    // no abras la pestaña nueva
    const caption = link.dataset.caption || "";
    lbImg.src = link.href;                     // pon la imagen del enlace
    lbImg.alt = caption;
    lbCaption.textContent = caption;           // pon el pie de foto
    lbCaption.textContent = caption;

    // Tamaño personalizado (si el enlace tiene data-width / data-height)
    lightbox.style.setProperty("--lb-width", link.dataset.width || "");
    lightbox.style.setProperty("--lb-height", link.dataset.height || "");

    lightbox.showModal();                      // abre la ventana
  });
});

// Cerrar con la X
lbClose.addEventListener("click", () => lightbox.close());

// Cerrar al pinchar fuera de la imagen
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});