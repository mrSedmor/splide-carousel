import imageUrlList from "./image-url-list.js"; // Списко URL картинок
import makeSlideMarkup from "./slide-template.js"; // Функция-шаблонизатор для генерации разметки слайда
const PRELOAD_SLIDE_COUNT = 3; // Сколько слайдов грузить заранее

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".projects__splide", {
    perPage: 1,
    gap: 16,
    speed: 750,
    breakpoints: {
      1024: {
        speed: 750,
      },
    },
  });
  var startX, startY, isScrolling;
  document.querySelector(".projects__splide .splide__track").addEventListener(
    "touchstart",
    function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = !1;
    },
    {
      passive: !0,
    }
  );
  document.querySelector(".projects__splide .splide__track").addEventListener(
    "touchmove",
    function (e) {
      var moveX = e.touches[0].clientX;
      var moveY = e.touches[0].clientY;
      var diffX = Math.abs(moveX - startX);
      var diffY = Math.abs(moveY - startY);
      if (diffY > diffX) {
        isScrolling = !0;
      }
      if (splide.is("moving")) {
        e.preventDefault();
      }
    },
    {
      passive: !1,
    }
  );
  splide.on("move", function (newIndex, prevIndex) {
    document.querySelector(".projects__splide .splide__track").style.pointerEvents = "none";
    var slides = splide.Components.Elements.slides;
    slides.forEach(function (slide) {
      var videoElement = slide.querySelector(".splide-inside");
      if (videoElement) {
        videoElement.classList.remove("custom-prev");
      }
    });
    if (prevIndex !== -1) {
      var prevSlideIndex = splide.index - 1;
      if (prevSlideIndex < 0) {
        prevSlideIndex = slides.length - 1;
      }
      var prevSlide = slides[prevSlideIndex];
      var prevVideoElement = prevSlide.querySelector(".splide-inside");
      if (prevVideoElement) {
        prevVideoElement.classList.add("custom-prev");
      }
    }
  });
  splide.on("moved", function () {
    document.querySelector(".projects__splide .splide__track").style.pointerEvents = "auto";

    // Добавляем слайды, если долистали почти до конца
    const newSplideLength = Math.min(splide.index + PRELOAD_SLIDE_COUNT + 1, imageUrlList.length);
    console.log(`index: ${splide.index}, length: ${splide.length}, target length: ${newSplideLength}`);
    while (splide.length < newSplideLength) splide.add(makeSlideMarkup(imageUrlList[splide.length]));
  });
  splide.mount();

  // Добавляем начальные слайды
  for (let i = 0; i <= PRELOAD_SLIDE_COUNT; i += 1) {
    splide.add(makeSlideMarkup(imageUrlList[i]));
  }
  /* 
    Load all slides:
    imageUrlList.forEach((item) => splide.add(makeSlideMarkup(item)));
  */
});
