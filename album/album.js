document.addEventListener("DOMContentLoaded", function () {
    let loginStatus = localStorage.getItem('loginStatus');

    if (loginStatus === 'true') {
        // Get the section containers
        const classVaSection = document.getElementById('class-va');
        const magazineSection = document.getElementById('magazine');

        // Add click event listeners
        if (classVaSection) {
            classVaSection.addEventListener('click', function () {
                window.location.href = 'photos/photos.html'; // Redirect to Class VA page
            });
        }

        if (magazineSection) {
            magazineSection.addEventListener('click', function () {
                window.location.href = 'album/magazine.html'; // Redirect to Magazine page
            });
        }
    } else {
        // Redirect to the login page if not logged in
        window.location.href = 'https://drfuntimes14.github.io/KVP';
        alert("Login first to view this content");
    }
});