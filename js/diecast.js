const slideIndex = [1, 1, 1, 1, 1, 1]; // what slide on
const slideId = [
  "mySlides1",
  "mySlides2",
  "mySlides3",
  "mySlides4",
  "mySlides5",
  "mySlides6",
];

for (let i = 0; i < slideIndex.length; i++) {
  showSlides(1, i);
}
/* showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4); */

function moveSlide(n, no) {
  showSlides((slideIndex[no] += n), no);
}
// n is slide number, no is what slide container
function showSlides(n, no) {
  let selected_slide = document.getElementsByClassName(slideId[no]);
  if (n > selected_slide.length) {
    slideIndex[no] = 1;
  } else if (n < 1) {
    slideIndex[no] = selected_slide.length;
  }
  for (let i = 0; i < selected_slide.length; i++) {
    selected_slide[i].style.display = "none";
  }
  selected_slide[slideIndex[no] - 1].style.display = "block";
}
