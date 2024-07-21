document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('main-video');
    const secondVideo = document.getElementById('second-video');
    const overlay = document.querySelector('.overlay');
    const content = document.querySelector('.content');
    const startButton = document.getElementById('start-button');

    const showOverlayAndContent = () => {
        overlay.style.opacity = '1';
        content.style.opacity = '1';
    };

    mainVideo.addEventListener('ended', () => {
        // Start playing the second video and loop it indefinitely
        mainVideo.style.display = 'none';
        secondVideo.style.display = 'block';
        secondVideo.play();
    });

    secondVideo.addEventListener('ended', () => {
        // Replay the second video
        secondVideo.currentTime = 0;
        secondVideo.play();
    });

    // Fade in the overlay and content after 12 seconds
    setTimeout(() => {
        showOverlayAndContent();
    }, 12000); // 12 seconds

    // Redirect to another page when the start button is clicked
    startButton.addEventListener('click', () => {
        window.location.href = 'loginselection.html';
    });

    // Skip to the 12-second mark of the first video when the screen is clicked
    document.addEventListener('click', () => {
        if (mainVideo.currentTime < 12) {
            mainVideo.currentTime = 12;
            mainVideo.play();
            showOverlayAndContent();
        }
    });
});
