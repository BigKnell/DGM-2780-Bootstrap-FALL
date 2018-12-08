// Custom JS here
CSSPlugin.defaultTransformPerspective = 400;

TweenMax.to(".navbar-brand", 3, { rotationY: 360 });



TweenMax.from(".border.border-white.one", 3, { x: 300, delay: 1, opacity: 0, scale: 0.5 });
TweenMax.from(".border.border-white.two", 3, { x: 300, delay: 2, opacity: 0, scale: 0.5 });
TweenMax.from(".border.border-white.three", 3, { x: 300, delay: 3, opacity: 0, scale: 0.5 });
TweenMax.from(".border.border-white.four", 3, { x: 300, delay: 4, opacity: 0, scale: 0.5 });
TweenMax.from(".border.border-white.five", 3, { x: 300, delay: 5, opacity: 0, scale: 0.5 });
TweenMax.from(".border.border-white.six", 3, { x: 300, delay: 6, opacity: 0, scale: 0.5 });
TweenMax.from(".border.border-white.seven", 3, { x: 300, delay: 7, opacity: 0, scale: 0.5 });
TweenMax.from(".border.border-white.eight", 3, { x: 300, delay: 8, opacity: 0, scale: 0.5 });


const logo = document.querySelector('#logo');
const animateBtn = document.querySelector('#confirmBtn');

animateBtn.addEventListener('click', function () {
    TweenMax.to("#logo", .5, { z: 300, opacity: 1, scale: 0.35 });
});