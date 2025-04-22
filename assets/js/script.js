const container = document.querySelector('.comments-container');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

const scrollAmount = 350; // largura do card + gap
const autoPlayInterval = 4000;

// Função para verificar se está no início ou fim
function isAtStart() {
    return container.scrollLeft <= 0;
}

function isAtEnd() {
    return container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1;
}

// Scroll manual com rotação infinita
leftBtn.addEventListener('click', () => {
    if (isAtStart()) {
    container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
});

rightBtn.addEventListener('click', () => {
    if (isAtEnd()) {
    container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
});

// Autoplay
function autoScroll() {
    if (isAtEnd()) {
    container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

let autoSlide = setInterval(autoScroll, autoPlayInterval);

[leftBtn, rightBtn].forEach((btn) => {
    btn.addEventListener('click', () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(autoScroll, autoPlayInterval);
    });
});

const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
    value = value.replace(/(\d*)/, '($1');
    }

    e.target.value = value;
});