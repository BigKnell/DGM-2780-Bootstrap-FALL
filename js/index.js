/*external js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/

window.onload = function() {
  var logo = document.getElementById("logo");
  TweenLite.to(logo, 2, {left:"80px", backgroundColor:"none", borderBottomColor:"#90e500", color:"white"});
}

//basic illustration of TweenMax's repeat, repeatDelay, yoyo and onRepeat
var box = document.getElementById("greenBox"),
    count = 0,
    tween;

tween = TweenMax.to(box, 2, {left:"700px", repeat:5, yoyo:true, onRepeat:onRepeat, repeatDelay:0.5, ease:Linear.easeNone});

function onRepeat() {
  count++;
  box.innerHTML = count;
  TweenLite.set(box, {backgroundColor:"hsl(" + Math.random() * 255 + ", 90%, 60%)"});
}							
						
