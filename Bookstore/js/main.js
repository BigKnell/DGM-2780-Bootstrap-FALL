const logo = document.querySelector('.logo');


//logo Event
logo.addEventListener('mouseover', function(){
const element = document.querySelectorAll(".logo");

const tl = new TimelineMax();

tl.fromTo(element, 0.2, {
  y:"+=10"
}, {
  y:"-=10",
  yoyo:true,
  repeat:3,
  onComplete: resetlogo

})
  function resetlogo(){
TweenMax.to(element, 1, {y:0})
};
});





//NAVIGATION
const hoverColor = "#e7dfdf";
const navLink = document.querySelector(".link1");
navLink.addEventListener('mouseover', function(){
  TweenMax.to(navLink, .2, { backgroundColor:hoverColor, ease:Power3.easeOut});
});
navLink.addEventListener('mouseout', function(){
  TweenMax.to(navLink, .2, { backgroundColor:"transparent", ease:Cubic.easeOut});
});


//link 2
const link2 = document.querySelector(".link2");
link2.addEventListener('mouseover', function(){
  TweenMax.to(link2, .2, { backgroundColor:hoverColor, ease:Power3.easeOut});
});
link2.addEventListener('mouseout', function(){
  TweenMax.to(link2, .2, { backgroundColor:"transparent", ease:Cubic.easeOut});
});

//link 3
const link3 = document.querySelector(".link3");
link3.addEventListener('mouseover', function(){
  TweenMax.to(link3, .2, { backgroundColor:hoverColor, ease:Power3.easeOut});
});
link3.addEventListener('mouseout', function(){
  TweenMax.to(link3, .2, { backgroundColor:"transparent", ease:Cubic.easeOut});
});

//link 4
const link4 = document.querySelector(".link4");
link4.addEventListener('mouseover', function(){
  TweenMax.to(link4, .2, { backgroundColor:hoverColor, ease:Power3.easeOut});
});
link4.addEventListener('mouseout', function(){
  TweenMax.to(link4, .2, { backgroundColor:"transparent", ease:Cubic.easeOut});
});

//link 5
const link5 = document.querySelector(".link5");
link5.addEventListener('mouseover', function(){
  TweenMax.to(link5, .2, { backgroundColor:hoverColor, ease:Power3.easeOut});
});
link5.addEventListener('mouseout', function(){
  TweenMax.to(link5, .2, { backgroundColor:"transparent", ease:Cubic.easeOut});
});

//submit button
//const btn = document.querySelector(".submitForm");
//btn.addEventListener('mouseover', function(){
  //TweenMax.to(btn, .2, { backgroundColor:"#dbcfcf", ease:Power3.easeOut});
//});
//btn.addEventListener('mouseout', function(){
  //TweenMax.to(btn, .2, { backgroundColor:"#565050", ease:Cubic.easeOut});
//});
