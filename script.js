
document.getElementById("scrollBtn").addEventListener("click", function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));
target.scrollIntoView({
behavior: "smooth"
});
});


document.querySelectorAll(".btn").forEach(btn => {
btn.addEventListener("click", function() {
this.style.backgroundColor = "#008CBA";
this.style.color = "#fff";
});
});

const whatsappBtn = document.getElementById('whatsappBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

whatsappBtn.addEventListener('click', (e) => {
e.preventDefault();
modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
modal.style.display = 'none';
});

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = 'none';
}
}