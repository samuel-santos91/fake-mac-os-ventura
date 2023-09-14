const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");
const audioSlider = document.getElementById("audioSlider");
const audioCurrentTime = document.getElementById("audioCurrentTime");
const volumeSlider = document.getElementById("volumeSlider");

export function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerHTML = "Pause";
    playIcon.src = "./assets/images/apps/icons/pause.png";
  } else {
    audioPlayer.pause();
    playButton.textContent = "Play";
    playIcon.src = "./assets/images/apps/icons/play.png";
  }
}

export function updateTrackTime() {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  audioCurrentTime.textContent = formatTime(audioPlayer.currentTime);
}

export function setCurrentTime() {
  audioPlayer.currentTime = audioSlider.value;
}

export function timeupdate() {
    audioSlider.value = audioPlayer.currentTime;
  }

export function loadMetaData() {
  audioSlider.max = audioPlayer.duration;
}

export function setVolume() {
  audioPlayer.volume = volumeSlider.value;
}
