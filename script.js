window.onscroll = function() {scrollFunction()};
document.addEventListener('DOMContentLoaded', (e)=> {
    modalGallery();
})


const scrollFunction = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.querySelector('.navbar').style.background = 'rgba(244, 246, 247, 1)';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(244, 246, 247, 0.3)';

    }
}

const modalGallery = () => {
    const images = document.querySelectorAll('.gallery-item img');
    let imgSrc;

    images.forEach((img) => {
        img.addEventListener('click', (e) => {
            imgSrc = e.target.src;
            imgModal(imgSrc);
        });
    });

    let imgModal = (src) =>{
        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal');
        document.querySelector('.gallery').append(modal);

        const newImage = document.createElement('img');
        newImage.setAttribute('src', src);

        const closeBtn = document.createElement('i');
        closeBtn.setAttribute('class', 'fas fa-times closeBtn');
        closeBtn.onclick = () => {
            modal.remove();
        }

        modal.append(newImage, closeBtn);
    }
}