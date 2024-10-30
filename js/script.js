let imgs = document.querySelectorAll(".hot-turs-slider .slider__body .slider__slide");
console.log(imgs);
let next = document.querySelector(".hot-turs-slider .next");
console.log(next);
let prev = document.querySelector(".hot-turs-slider .prev");
console.log(prev);

let current_slide = 0;

next.addEventListener('click', function () {
    imgs[current_slide].style.opacity = 0;
    if (current_slide == imgs.length - 1) {
        current_slide = 0;
    } else {
        current_slide++;
    }
    imgs[current_slide].style.opacity = 1;
})

prev.addEventListener('click', function () {
    imgs[current_slide].style.opacity = 0;
    if (current_slide == 0) {
        current_slide = imgs.length - 1;
    } else {
        current_slide--;
    }
    imgs[current_slide].style.opacity = 1;
})