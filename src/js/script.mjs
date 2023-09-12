import displayCurrentTime from "./dateTime.mjs";
import { dropdownMenu, clickOffDropdownBlock } from "./dropdownMenus.mjs";
import {
  togglePlay,
  setVolume,
  setCurrentTime,
  loadMetaData,
  timeupdate,
  updateTrackTime,
} from "./music.mjs";

//DATE AND TIME
displayCurrentTime();
setInterval(displayCurrentTime, 60000);

//DROPDOWN MENUS
const menusList = document.querySelectorAll(".list");

menusList.forEach((item) => {
  item.addEventListener("click", dropdownMenu);
});

document.addEventListener("click", clickOffDropdownBlock);

//APPS WINDOWS
const appIcon = document.querySelectorAll(".icon");
const closeButton = document.querySelectorAll('[class*="app__header--close"]');
const appWindow = document.querySelectorAll(
  ".google-app, .musics-app, .photos-app"
);

const cleanZIndex = () => {
  appWindow.forEach((icon) => {
    icon.style.zIndex = 0;
  });
};

const openApp = (e) => {
  const elem = document.getElementById(`${e.target.id}AppWindow`);
  if (elem) {
    cleanZIndex();

    elem.style.display = "block";
    elem.style.zIndex = 10;
  }
};

const closeApp = (e) => {
  console.log(e.target)
  const elem = document.getElementById(`${e.target.id}AppWindow`);
  elem.style.display = "none";
};

const bringForward = (e) => {
  cleanZIndex();

  const elem = document.getElementById(e.target.id);

  if (elem) {
    elem.style.zIndex = 10;
  } else {
    const newElem = document.getElementById(
      `${e.target.classList.value.slice(0, 6)}AppWindow`
    );
    if (newElem) return (newElem.style.zIndex = 10);
  }
};

appIcon.forEach((icon) => {
  icon.addEventListener("click", openApp);
});

closeButton.forEach((icon) => {
  icon.addEventListener("click", closeApp);
});

appWindow.forEach((window) => {
  window.addEventListener("click", bringForward);
});

//MUSIC APP
const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");
const audioPlayer = document.getElementById("audioPlayer");
const audioSlider = document.getElementById("audioSlider");
const volumeSlider = document.getElementById("volumeSlider"); 

playButton.addEventListener("click", togglePlay);
playIcon.addEventListener("click", togglePlay);
audioPlayer.addEventListener("timeupdate", updateTrackTime);

audioSlider.addEventListener("input", setCurrentTime);
audioPlayer.addEventListener("timeupdate", timeupdate);
audioPlayer.addEventListener("loadedmetadata", loadMetaData);

volumeSlider.addEventListener("input", setVolume);
