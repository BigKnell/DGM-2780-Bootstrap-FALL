const addButton = document.querySelector(".addButton");
const display = document.querySelector(".overlay");
//addButton.addEventListener('onclick', function(){
  //TweenMax.to(addButton, .2, { backgroundColor:'#000', ease:Power3.easeIn});
  //TweenMax.to(display, 2.5, {autoAlpha: 1, display:'block', ease:Sine.easeOut});
//navLink.addEventListener('mouseout', function(){
  //TweenMax.to(navLink, .2, { backgroundColor:"transparent", ease:Cubic.easeOut});
//});

const displayAdd = new TimelineMax({paused: true});
//alias for brevity 

const hb = new TimelineMax({paused: true}); //hidebox

addButton.addEventListener('click', function(){
  displayAdd.play();
      displayAdd.set(display, {autoAlpha: 1,display:'flex', ease:Power3.easeOut});
});

const exitBtn = document.querySelector(".exitButton");
exitBtn.addEventListener('click', function(){
      displayAdd.set(display, {autoAlpha: 0,display:'flex', ease:Power3.easeOut});
});
