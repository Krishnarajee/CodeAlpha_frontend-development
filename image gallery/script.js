const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

let index = 0;

/* Open Lightbox */
function openLightbox(i) {
  index = i;
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
}

/* Close Lightbox */
function closeLightbox() {
  lightbox.style.display = "none";
}

/* Navigation */
function next() {
  index = (index + 1) % images.length;
  lightboxImg.src = images[index].src;
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  lightboxImg.src = images[index].src;
}

/* Filters */
function filterImages(category) {
  images.forEach(img => {
    img.style.display =
      category === "all" || img.classList.contains(category)
      ? "block"
      : "none";
  });
}
