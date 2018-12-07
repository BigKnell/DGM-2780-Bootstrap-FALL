// Custom JS here

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
     
   $('.carousel').carousel()
     
   TweenMax.to(".logo-image", 3, {rotationY:360});
   // document ready  
   });

   $('.section-content').hover(
    function () {
        TweenMax.to(this, 2, { css:{ scaleX:1.1, scaleY:1.1 }, ease:Circ.easeOut});
    },
    function () {
        TweenMax.to(this, 2, { css:{ scaleX:1, scaleY:1 }, ease:Circ.easeOut});
    }
    );

   $('.carousel-caption').hover(
    function () {
        TweenMax.to(this, 2, { css:{ scaleX:1.1, scaleY:1.1 }, ease:Circ.easeOut});
    },
    function () {
        TweenMax.to(this, 2, { css:{ scaleX:1, scaleY:1 }, ease:Circ.easeOut});
    }
    );