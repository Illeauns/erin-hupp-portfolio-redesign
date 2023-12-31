const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
window.onload = function () {
    const carousels = document.querySelectorAll(".carousel") || [];

    carousels.forEach((carousel) => {
        setupCarousel(carousel);
    });

    function setupCarousel(carousel) {
        const leftButt = carousel.querySelector(".button-left");
        const rightButt = carousel.querySelector(".button-right");
        const track = carousel.querySelector(".carousel_track");

        const slides = Array.from(track.children);
        const slideSize = slides[0].getBoundingClientRect().width;
        const targetIndex = slides.findIndex;

        // const dotsNav = document.querySelector('.carousel__nav')
        // const dots = Array.from(dotsNav.children)

        //arrage slides next to one another
        function setSlidePosition(slide, index) {
            slide.style.left = slideSize * index + "px";
        }
        slides.forEach(setSlidePosition);

        function moveToSlide(track, currentSlide, targetSlide) {
            track.style.transform = "translateX(-" + targetSlide.style.left + ")";
            currentSlide.classList.remove("current-slide");
            targetSlide.classList.add("current-slide");
        }

        // const updateDots = (currentDot, targetDot) => {
        //     currentDot.classList.remove('current-slide')
        //     targetDot.classList.add('current-slide')
        // }

        //left button function
        leftButt.addEventListener("click", prevButt);

        function prevButt() {
            var currentSlide = track.querySelector(".current-slide");
            var prevSlide = currentSlide.previousElementSibling;
            var prevIndex = slides.findIndex((slide) => slide === prevSlide);
            // const currentDot = dotsNav.querySelector('.current-slide')
            // const prevDot = currentDot.previousElementSibling

            hideShowArrow(slides, leftButt, rightButt, prevIndex);
            moveToSlide(track, currentSlide, prevSlide);
            // updateDots(currentDot, prevDot)
        }

        //right button function
        rightButt.addEventListener("click", nextButt);

        function nextButt() {
            var currentSlide = track.querySelector(".current-slide");
            var nextSlide = currentSlide.nextElementSibling;
            var nextIndex = slides.findIndex((slide) => slide === nextSlide);
            // const currentDot = dotsNav.querySelector('.current-slide')
            // const nextDot = currentDot.nextElementSibling

            hideShowArrow(slides, leftButt, rightButt, nextIndex);
            moveToSlide(track, currentSlide, nextSlide);
            // updateDots(currentDot, nextDot)
        }

        //clicking on dot moves to targeted slide
        // dotsNav.addEventListener('click', e => {
        //     const targetDot = e.target.closest('button')

        //     if (!targetDot) return

        //     const currentSlide = track.querySelector('.current-slide')
        //     const currentDot = dotsNav.querySelector('.current-slide')
        //     const targetIndex = dots.findIndex(dot => dot === targetDot)
        //     const targetSlide = slides[targetIndex]

        //     moveToSlide(track, currentSlide, targetSlide)
        //     updateDots(currentDot, targetDot)
        // })

        //hide/show arrows if on first/last slide
        function hideShowArrow(slides, leftButt, rightButt, targetIndex) {
            if (targetIndex === 0) {
                leftButt.classList.add("is-hidden");
                rightButt.classList.remove("is-hidden");
            } else if (targetIndex === slides.length - 1) {
                leftButt.classList.remove("is-hidden");
                rightButt.classList.add("is-hidden");
            } else {
                leftButt.classList.remove("is-hidden");
                rightButt.classList.remove("is-hidden");
            }
        }
    }
};


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

