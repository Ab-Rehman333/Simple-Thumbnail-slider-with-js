const getCurrentImage = document.querySelector("#current")
const allImages = document.querySelectorAll(".image-gallery img");
let opacity = 0.2;
allImages[0].style.opacity = opacity
allImages.forEach(image => image.addEventListener("click", (e) => {
    allImages.forEach(img => img.style.opacity = 1)
    getCurrentImage.src = e.target.src;
setTimeout(() => {
    getCurrentImage.classList.remove("animate")
}, 500);
    getCurrentImage.classList.add("animate")
    e.target.style.opacity = opacity;
}))