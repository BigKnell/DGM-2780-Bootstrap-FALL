// Custom JS here
const cardCreator = (spa) =>{
 let card = document.querySelector('#cards')
 card.className = "card"
 card.addEventListener( 'hover', function() {
     card.classList.toggle('is-flipped');
 })
}