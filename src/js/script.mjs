import displayCurrentTime from "./dateTime.mjs";
import { dropdownMenu, clickOffDropdownBlock } from "./dropdownMenus.mjs";

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
  ".google-app, .music-app, .photos-app"
);

const openApp = (e) => {
  const elem = document.getElementById(`${e.target.id}AppWindow`);
  if (elem) {
    appWindow.forEach((icon) => {
      icon.style.zIndex = 0;
    });

    elem.style.display = "block";
    elem.style.zIndex = 10;
  }
};

const closeApp = (e) => {
  const elem = document.getElementById(`${e.target.id}AppWindow`);
  elem.style.display = "none";
};

const bringForward = (e) => {
  appWindow.forEach((icon) => {
    icon.style.zIndex = 0;
  });

  const elem = document.getElementById(e.target.id);
  elem.style.zIndex = 10;
};

appIcon.forEach((icon) => {
  icon.addEventListener("click", openApp);
});

closeButton.forEach((icon) => {
  icon.addEventListener("click", closeApp);
});

appWindow.forEach((icon) => {
  icon.addEventListener("click", bringForward);
});
