const $upBtn = document.querySelector(".up-button");
const $downBtn = document.querySelector(".down-button");

const $sidebar = document.querySelector(".sidebar");
const countSlides = $sidebar.children.length;
$sidebar.style.top = `-${(countSlides - 1) * 100}vh`;

const $mainSlide = document.querySelector(".main-slide");

let activeSlideIndex = 0;

const setActiveSlideIndex = direction => {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === countSlides) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = countSlides - 1;
    }
  }
};

const changeSlide = e => {
  const { direction } = e.currentTarget.dataset;
  setActiveSlideIndex(direction);

  $mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
  $sidebar.style.transform = `translateY(${activeSlideIndex * 100}%)`;
};

$upBtn.addEventListener("click", changeSlide);
$downBtn.addEventListener("click", changeSlide);
