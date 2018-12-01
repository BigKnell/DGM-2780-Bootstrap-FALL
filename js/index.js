$(document).ready(function() {
  //Animation cards
  const cards = document.querySelectorAll(".card");
  const newTag = document.querySelector(".card .new-tag");
  console.log(cards);
  cards.forEach((card)=>{
    //Mouse over
    card.addEventListener('mouseover', ()=>{
      TweenMax.to(card, .2, {scale: 1.05});
    });
    //Mouse out
    card.addEventListener('mouseout', ()=>{
      TweenMax.to(card, .2, {scale: 1});
    });
  });

  //Animation Search Box and Icon
  const bodyEl = document.querySelector("body");
  const searchBox = document.querySelector(".search-box");
  const searchIcon = document.querySelector(".search-icon");

  bodyEl.addEventListener("click", ()=>{
    if(document.activeElement === searchBox) {
      //Has focus
      TweenMax.to(searchIcon, .5, {scale: 1.5, rotation: 90, x: 25, ease: Back.easeOut.config(1.7)});
      TweenMax.to(searchBox, .3, {x: -20});
    } else {
      //Doesn't have focus
      TweenMax.to(searchIcon, .5, {scale: 1, rotation: 0, x: 0, ease: Back.easeOut.config(1.7)});
      TweenMax.to(searchBox, .3, {x: 0});
    }
  });

});
