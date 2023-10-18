window.onscroll = function () { scrollFunction() };
document.addEventListener('DOMContentLoaded', (e) => {
    modalGallery();
    slideShow();
})


const scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.navbar').style.background = 'rgba(244, 246, 247, 1)';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(244, 246, 247, 0.3)';

    }
}

const modalGallery = () => {
    const images = document.querySelectorAll('.gallery-item img');

    images.forEach((img) => {
        img.addEventListener('click', () => {
            imgModal(img);
        })
    });

    let imgModal = (img) => {

        console.log(img);
        let src = img.src;

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
    };
}

const slideShow = () => {
    const slides = document.querySelectorAll('.slide');

    let slideIndex = 0;

    setInterval(() => {   
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        } else{
            slideIndex++
        };
        changeSlide();
    }, 2000);


    const changeSlide = () => {
        slides.forEach((slide) => {
            if (slideIndex === slides.indexOf(slide)) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
 
}