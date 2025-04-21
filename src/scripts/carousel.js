document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-container").forEach((container) => {
    const slide = container.querySelector(".carousel-slide");
    const slides = container.querySelectorAll("img");
    const dotsContainer = container.querySelector(".carousel-dots");
    let currentIndex = 0;
    let autoPlayInterval;
    let isMouseOver = false;

    // Criar dots
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot";
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToSlide(index);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
      slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }

    function startAutoplay() {
      if (!isMouseOver) {
        autoPlayInterval = setInterval(nextSlide, 5000);
      }
    }

    function resetAutoplay() {
      clearInterval(autoPlayInterval);
      startAutoplay();
    }

    //pausar/retomar autoplay
    container.addEventListener("mouseenter", () => {
      isMouseOver = true;
      clearInterval(autoPlayInterval);
    });

    container.addEventListener("mouseleave", () => {
      isMouseOver = false;
      startAutoplay();
    });

    startAutoplay();
  });
});
