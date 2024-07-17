export default function makeSlideMarkup({ imageUrl }) {
  return `<div class="projects__splide-slide splide__slide projects__gallery-item rl-gallery-item">
    <a
      href="${imageUrl}"
      data-rl_title=""
      class="projects__gallery-link rl-gallery-link swipebox splide-inside"
      data-rl_caption=""
      data-rel="lightbox-gallery-"
      data-lbwps-width="1741"
      data-lbwps-height="977"
      data-lbwps-srcsmall="${imageUrl}"
    >
      <svg
        class="border-decor-left-top projects__decor border-decor"
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 7V1H7" stroke="#0C0C0C"></path>
      </svg>
      <svg
        class="border-decor-left-bottom projects__decor border-decor"
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 -5.96046e-08V6H7" stroke="#0C0C0C"></path>
      </svg>
      <div class="projects__gallery-img-wrapper">
        <img
          alt="ВАГИ ДЛЯ АВТО"
          class="projects__gallery-img"
          decoding="async"
          src="${imageUrl}"
        />
      </div>
      <svg
        class="border-decor-right-top projects__decor border-decor"
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 7L6 1L0 1" stroke="#0C0C0C"></path>
      </svg>
      <svg
        class="border-decor-right-bottom projects__decor border-decor"
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 -5.96046e-08L6 6L0 6" stroke="#0C0C0C"></path>
      </svg>
    </a>
  </div>`;
}
