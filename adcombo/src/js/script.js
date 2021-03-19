$(document).ready(function () {
  if ($(window).width() <= 1140) {
    $(".slider").bxSlider();
  }
});

const accordionHeaders = document.querySelectorAll(".accordion__title");
const accordionBodies = document.querySelectorAll(".accordion__content");

for (let i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener("click", (evt) => {
    const accordionActiveHeader = document.querySelector(
      ".accordion__title.accordion__title--active"
    );
    if (
      accordionActiveHeader &&
      accordionActiveHeader !== accordionHeaders[i]
    ) {
      accordionActiveHeader.classList.toggle("accordion__title--active");
      accordionActiveHeader.nextElementSibling.classList.remove(
        "accordion__content--active"
      );
    }
    evt.target.classList.toggle("accordion__title--active");
    if (accordionHeaders[i].classList.contains("accordion__title--active")) {
      accordionBodies[i].classList.add("accordion__content--active");
    } else {
      accordionBodies[i].classList.remove("accordion__content--active");
    }
  });
}
