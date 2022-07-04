const collection = document.querySelector(".image_container");
const slides = Array.from(collection.children);
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const slideWidth = slides[0].getBoundingClientRect().width;

function setSlidePosition(slide, index) {
  slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition);

function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

function updateDots(currentDot, targetDot) {
  currentDot.classList.remove("current_slide");
  targetDot.classList.add("current_slide");
}

function hideShowArrows(slides, prevButton, nextButton, targetIndex) {
  if (targetIndex === 0) {
    console.log("1");
    prevButton.classList.add("is_hidden");
    nextButton.classList.remove("is_hidden");
  } else if (targetIndex === slides.length - 1) {
    console.log("2");
    prevButton.classList.remove("is_hidden");
    nextButton.classList.add("is_hidden");
  } else {
    console.log("3");
    prevButton.classList.remove("is_hidden");
    nextButton.classList.remove("is_hidden");
  }
}

prevButton.addEventListener("click", function () {
  const curr_Slide = collection.querySelector(".current-slide");
  const prev_Slide = curr_Slide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current_slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prev_Slide);
  moveToSlide(collection, curr_Slide, prev_Slide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener("click", function () {
  const curr_Slide = collection.querySelector(".current-slide");
  const next_Slide = curr_Slide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current_slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === next_Slide);
  moveToSlide(collection, curr_Slide, next_Slide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const curr_Slide = collection.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current_slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(collection, curr_Slide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
