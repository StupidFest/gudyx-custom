// Inicialização do Slider
let currentSlide = 0;
let sliderData = [];

function initSlider(slides) {
    sliderData = slides;
    const sliderEl = document.getElementById('slider');
    const dotsContainer = document.getElementById('sliderDots');
    if (!sliderEl || slides.length === 0) return;
    
    renderSlider();
    renderDots();
    
    document.getElementById('prevBtn').addEventListener('click', () => mudarSlide(-1));
    document.getElementById('nextBtn').addEventListener('click', () => mudarSlide(1));
    
    setInterval(() => mudarSlide(1), 5000);
}

function renderSlider() {
    const sliderEl = document.getElementById('slider');
    sliderEl.innerHTML = sliderData.map(slide => `
        <div class="slide" style="background-image: url('${slide.imagem}');">
            <div class="slide-texto">${slide.titulo}</div>
        </div>
    `).join('');
    sliderEl.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function renderDots() {
    const dotsContainer = document.getElementById('sliderDots');
    dotsContainer.innerHTML = sliderData.map((_, i) => 
        `<span class="dot ${i === currentSlide ? 'ativo' : ''}" data-index="${i}"></span>`
    ).join('');
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentSlide = parseInt(e.target.dataset.index);
            updateSlider();
        });
    });
}

function mudarSlide(dir) {
    currentSlide = (currentSlide + dir + sliderData.length) % sliderData.length;
    updateSlider();
}

function updateSlider() {
    document.getElementById('slider').style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('ativo', i === currentSlide);
    });
}

// Fallback para imagens quebradas
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'imagens/placeholder.png';
    }
}, true);