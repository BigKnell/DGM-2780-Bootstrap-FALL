// Custom JS here
let thumb1 = $("#thumb1");
let thumb2 = $("#thumb2");
let thumb3 = $("#thumb3");
let thumb4 = $("#thumb4");

thumb1.mouseenter(function() {
    var tween = TweenMax.from(thumb1, 1, {
        scale: 1.20,
    });
});

thumb2.mouseenter(function() {
    var tween = TweenMax.from(thumb2, 1, {
        scale: 1.20,
    });
});

thumb3.mouseenter(function() {
    var tween = TweenMax.from(thumb3, 1, {
        scale: 1.20,
    });
});

thumb4.mouseenter(function() {
    var tween = TweenMax.from(thumb4, 1, {
        scale: 1.20,
    });
});




TweenMax.to("#logo", 1, {rotationX: 360});

const animateBtn = document.querySelector('#animate-btn');

animateBtn.addEventListener('click', function(){
    TweenMax.to("#form", 1, {x:100});
});
