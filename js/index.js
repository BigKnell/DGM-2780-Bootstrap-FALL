// Custom JS here
const animateBtn = document.querySelector('#animate-btn');
animateBtn.addEventListener('click', function(){
	TweenMax.to(".card", 3, {x:100});
});
