let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})

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
