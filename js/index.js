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
});
