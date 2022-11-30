/* import Carousel from "vanilla-js-carousel"; */
const Carousel = require("vanilla-js-carousel");

const carousel = new Carousel({
  elem: "carousel", // id of the carousel container
  autoplay: false, // starts the rotation automatically
  infinite: true, // enables the infinite mode
  interval: 1500, // interval between slide changes
  initial: 0, // slide to start with
  dots: true, // show navigation dots
  arrows: true, // show navigation arrows
  buttons: false, // hide play/stop buttons,
  btnStopText: "Pause", // STOP button text
});

// Show slide number 3 (Numeration of slides starts at 0)

/* export function addEventListeners() {
  document
    .querySelector(".reviews__back-button")
    .addEventListener("click", () => {
      carousel.prev();
      console.log(clicked);
    });

  document
    .querySelector(".reviews__forward-button")
    .addEventListener("click", () => {
      carousel.next();
      console.log(clicked);
    });
} */

carousel.show(2);

// Move to the next slide
carousel.next();
