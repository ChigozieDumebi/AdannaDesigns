
document.getElementById("scrollBtn")?.addEventListener("click", function(e) {
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
    
    if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    });
    }
    
    if (closeBtn) {
    closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    });
    }
    

    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = 'none';
    }
    };
    
    document.querySelectorAll(".whatsapp-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
    const phoneNumber = '2348127394866'; 
    const message = encodeURIComponent('Hi, I am interested in your services.');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
    });
    });