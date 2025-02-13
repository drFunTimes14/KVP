document.addEventListener('DOMContentLoaded', () => {
    let loginStatus = localStorage.getItem('loginStatus');
    if(loginStatus === 'true'){
        const images = document.querySelectorAll('.gallery img');
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.querySelector('.lightbox-img');
        const closeBtn = document.querySelector('.close');
        const downloadBtn = document.querySelector('.download-btn');

        // Lightbox functionality
        images.forEach(image => {
            image.addEventListener('click', () => {
                lightbox.classList.add('show');
                lightboxImg.src = image.src;
                downloadBtn.href = image.src;  // Set the download link
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('show');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg && e.target !== downloadBtn) {
                lightbox.classList.remove('show');
            }
        }); 
    } else{
        window.location.href = 'https://drfuntimes14.github.io/KVP';
        alert("Login first to view this content")
    }
});
