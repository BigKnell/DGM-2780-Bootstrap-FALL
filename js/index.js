$(document).ready(function(){

    //Carousel
    $("#javaCarousel").carousel();
    $(".pic1").click(function() {
        $("#javaCarousel").carousel(0);
    });
    $(".pic2").click(function() {
        $("#javaCarousel").carousel(1);
    });
    $(".pic3").click(function() {
        $("#javaCarousel").carousel(2);
    }); 
    $(".pic4").click(function() {
        $("#javaCarousel").carousel(3);
    });
    $(".carousel-control-prev").click(function(){
        $("#javaCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#javaCarousel").carousel("next");
    });

    //Collapsable alert
    $(".closer").click(function() {
        $("#formAlert").alert("close");
    });

    //GreenSock

    //This one will send the logo to the other side of the screen
    //if you mouse over it.
    $(".logo").mouseover(function() {
        TweenLite.to(".logo", 4, {ease: Power3.easeIn, x: "60%"});
    });

    //Makes the badges shake when the mouse leaves.
    $(".badge").each(function(){
        $(this).mouseleave(function() {
            TweenLite.to(this, 3, {ease: RoughEase.ease.config({
                template: Sine.easeIn,
                strength: 1,
                points: 30,
                taper:"none",
                randomize: false,
                clamp: false
            }),
        y: 5});
        });
    })
});
