document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let slideIndex = 0;

  prevBtn.addEventListener("click", function () {
    slideIndex--;
    showSlide();
  });

  nextBtn.addEventListener("click", function () {
    slideIndex++;
    showSlide();
  });

  function showSlide() {
    const slides = document.querySelectorAll(".slide");
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  setInterval(function () {
    slideIndex++;
    showSlide();
  }, 5000);
});
