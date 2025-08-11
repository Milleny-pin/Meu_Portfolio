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

