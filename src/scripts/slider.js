// Slider 0

const images = document.querySelectorAll(".slider_room .slider_room__line img");
const sliderLine = document.querySelector(".slider_room__line");
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider_room").offsetWidth; // width of slider
  sliderLine.style.width = width * images.length + "px"; // width of all pics together
  images.forEach((item) => {
    // resize to block
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

// prev button

document
  .querySelector(".slider_room__prev") // listen the prev button
  .addEventListener("click", function () {
    // if click
    count--;
    if (count < 0) {
      // if first pics
      count = images.length - 1;
    }
    rollSlider();
  });

// next button

document
  .querySelector(".slider_room__next") // listen the next button
  .addEventListener("click", function () {
    // if click
    count++;
    if (count >= images.length) {
      // if end pics
      count = 0;
    }
    rollSlider();
  });

window.addEventListener("resize", init); // listen for resize window
init();

// change position for change image

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

// Slider 1

const images1 = document.querySelectorAll(
  ".slider_room1 .slider_room1__line img"
);
const sliderLine1 = document.querySelector(".slider_room1__line");
let count1 = 0;
let width1;

function init1() {
  width1 = document.querySelector(".slider_room1").offsetWidth;
  sliderLine1.style.width = width1 * images1.length + "px";
  images1.forEach((item1) => {
    item1.style.width = width1 + "px";
    item1.style.height = "auto";
  });
  rollSlider1();
}

document
  .querySelector(".slider_room1__prev")
  .addEventListener("click", function () {
    count1--;
    if (count1 < 0) {
      count1 = images1.length - 1;
    }
    rollSlider1();
  });

document
  .querySelector(".slider_room1__next")
  .addEventListener("click", function () {
    count1++;
    if (count1 >= images1.length) {
      count1 = 0;
    }
    rollSlider1();
  });

window.addEventListener("resize", init1);
init1();

function rollSlider1() {
  sliderLine1.style.transform = "translate(-" + count1 * width1 + "px)";
}

// Slider 2

const images2 = document.querySelectorAll(
  ".slider_room2 .slider_room2__line img"
);
const sliderLine2 = document.querySelector(".slider_room2__line");
let count2 = 0;
let width2;

function init2() {
  width2 = document.querySelector(".slider_room2").offsetWidth;
  sliderLine2.style.width = width2 * images2.length + "px";
  images2.forEach((item2) => {
    item2.style.width = width2 + "px";
    item2.style.height = "auto";
  });
  rollSlider2();
}

document
  .querySelector(".slider_room2__prev")
  .addEventListener("click", function () {
    count2--;
    if (count2 < 0) {
      count2 = images2.length - 1;
    }
    rollSlider2();
  });

document
  .querySelector(".slider_room2__next")
  .addEventListener("click", function () {
    count2++;
    if (count2 >= images2.length) {
      count2 = 0;
    }
    rollSlider2();
  });

window.addEventListener("resize", init2);
init2();

function rollSlider2() {
  sliderLine2.style.transform = "translate(-" + count2 * width2 + "px)";
}

// Slider 3

const images3 = document.querySelectorAll(
  ".slider_room3 .slider_room3__line img"
);
const sliderLine3 = document.querySelector(".slider_room3__line");
let count3 = 0;
let width3;

function init3() {
  width3 = document.querySelector(".slider_room3").offsetWidth;
  sliderLine3.style.width = width3 * images3.length + "px";
  images3.forEach((item3) => {
    item3.style.width = width3 + "px";
    item3.style.height = "auto";
  });
  rollSlider3();
}

document
  .querySelector(".slider_room3__prev")
  .addEventListener("click", function () {
    count3--;
    if (count3 < 0) {
      count3 = images3.length - 1;
    }
    rollSlider3();
  });

document
  .querySelector(".slider_room3__next")
  .addEventListener("click", function () {
    count3++;
    if (count3 >= images3.length) {
      count3 = 0;
    }
    rollSlider3();
  });

window.addEventListener("resize", init3);
init3();

function rollSlider3() {
  sliderLine3.style.transform = "translate(-" + count3 * width3 + "px)";
}
