// Custom JS here
function toggleMenu() {
    document.getElementById('hamburgerBtn').classList.toggle('open');
    document.getElementById('primaryNav').classList.toggle('open');
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu