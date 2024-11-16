function toggleIframeFullscreen() {
    const iframe = document.getElementById("gameFrame");
    const fullscreenButton = document.getElementById("fullscreen-button");

    if (!document.fullscreenElement) {
        iframe.requestFullscreen();
        fullscreenButton.innerHTML = "<box-icon name='exit-fullscreen'></box-icon>"
    } else {
        document.exitFullscreen();
        fullscreenButton.innerHTML = "<box-icon name='fullscreen'></box-icon>";
    }
}
document.addEventListener("fullscreenchange", () => {
    const fullscreenButton = document.getElementById("fullscreen-button");

    if (!document.fullscreenElement) {
        fullscreenButton.innerHTML = "<box-icon name='fullscreen'></box-icon>";
    }
});
