const onMouse = document.querySelector('#colorChange');
onMouse.addEventListener('mouseover', function(){
	TweenMax.to(onMouse, 1, {color:"red"});
});