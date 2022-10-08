"use strict";

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
const menuIconOpen = document.getElementById("menu-icon-bars");
const menuIconClose = document.getElementById("menu-icon-close");
const menuSpan = document.querySelector("#menu-toggle span");

menuToggle.addEventListener("click", () => {
  if (nav.classList.contains("show-menu")) {
    // menu is open & want to close it
    nav.classList.remove("show-menu");
    menuIconOpen.style.display = "block";
    menuIconClose.style.display = "none";
  } else {
    // menu is closed & want to open it
    nav.classList.add("show-menu");
    menuIconOpen.style.display = "none";
    menuIconClose.style.display = "block";
  }
});