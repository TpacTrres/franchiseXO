// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", togglePlayPause);
    audioPlayer.addEventListener("timeupdate", updateProgressBar);

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = "⏸";
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = "▶";
        }
    }
});
