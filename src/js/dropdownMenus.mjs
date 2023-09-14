const menusList = document.querySelectorAll(".list");
const dropdowns = document.querySelectorAll(".dropdown");

export function dropdownMenu(e) {
  const menuTitle = document.getElementById(e.target.id);
  const dropdownBlock = document.querySelector(`.${e.target.id}-menu`);
  menusList.forEach((item) => {
    item.classList.remove("highlight");
  });

  if (
    dropdownBlock.style.display === "" ||
    dropdownBlock.style.display === "none"
  ) {
    dropdowns.forEach((block) => {
      block.style.display = "none";
    });
    dropdownBlock.style.display = "block";
    menuTitle.classList.add("highlight");
  } else {
    dropdownBlock.style.display = "none";
  }
}

export function clickOffDropdownBlock(e) {
  if (
    e.target.classList.contains("dropdown") ||
    e.target.classList.contains("list") ||
    e.target.parentElement.classList.contains("ul")
  ) {
    return;
  } else {
    dropdowns.forEach((block) => {
      block.style.display = "none";
    });
    menusList.forEach((item) => {
      item.classList.remove("highlight");
    });
  }
}


