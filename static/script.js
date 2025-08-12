const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtn = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');
const videoIframe = document.getElementById('video-iframe');

openModalBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const videoUrl = event.currentTarget.dataset.video;
        
        videoIframe.src = videoUrl;
        modalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
    videoIframe.src = "";
    document.body.style.overflow = 'auto';
});

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('show');
        videoIframe.src = "";
        document.body.style.overflow = 'auto';
    }
});


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const canvas = document.getElementById('bg-triangles');
const ctx = canvas.getContext('2d');

let width, height;
let triangles = [];

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createTriangles() {
    triangles = [];
    for (let i = 0; i < 30; i++) {
        triangles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 60 + 20,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.02
        });
    }
}

function drawTriangles() {
    ctx.clearRect(0, 0, width, height);

    triangles.forEach(t => {
        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.rotate(t.rotation);
        ctx.beginPath();
        ctx.moveTo(0, -t.size / 2);
        ctx.lineTo(t.size / 2, t.size / 2);
        ctx.lineTo(-t.size / 2, t.size / 2);
        ctx.closePath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'red';
        ctx.fillStyle = 'rgba(255, 0, 0, 0.6)';
        ctx.fill();
        ctx.restore();

        t.x += t.speedX;
        t.y += t.speedY;
        t.rotation += t.rotationSpeed;
        if (t.x < -t.size) t.x = width + t.size;
        if (t.x > width + t.size) t.x = -t.size;
        if (t.y < -t.size) t.y = height + t.size;
        if (t.y > height + t.size) t.y = -t.size;
    });

    requestAnimationFrame(drawTriangles);
}

createTriangles();
drawTriangles();
