
const ad = document.querySelector('#ad');

ad.addEventListener('click', function(){

    TweenMax.to('#move1', 2, {y:45});

    TweenMax.to('#move2', 2, {y:-40});
});

TweenLite.to('#ad', 6, {
    
    backgroundColor:'#8b0000',
    color:'#228b22',
    ease: Power4.easeIn
});

const reasons = document.querySelector('#reasons')

reasons.addEventListener('mouseover', function(){

    TweenMax.from('#item1', 2, {y:65});
    TweenMax.to('#item2', 2, {y:-45});
    TweenMax.to('#item3', 2, {y:-55});


    
});

TweenLite.to('#reasons', 6, {

    color: '#8b0000',
    ease: Power4.easeIn
})