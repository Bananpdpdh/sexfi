function playPause() {
    const video = document.getElementById('videoPlayer');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function muteUnmute() {
    const video = document.getElementById('videoPlayer');
    video.muted = !video.muted;
}

function changeSpeed() {
    const video = document.getElementById('videoPlayer');
    let speed = video.playbackRate;
    speed += 0.25; // زيادة السرعة بمقدار 0.25
    if (speed > 2) speed = 0.5; // إعادة السرعة إلى 0.5x إذا تجاوزت 2x
    video.playbackRate = speed;
}

function changeVolume(value) {
    const video = document.getElementById('videoPlayer');
    video.volume = value;
}